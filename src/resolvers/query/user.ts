import { IResolvers } from 'graphql-tools';
import { USER_LIST, USER_SELECT_DETAILS } from '../../constants/db-operations';

const resolverQueryUsers: IResolvers = {
  Query: {
    users(_, __, { connection }) {
      // Devuelvo una lista de usuarios

      const users = new Array(0);

      const sql = USER_LIST;
      return new Promise((resolve, reject) => {
        connection.query(sql, function (error: any, results: any) {
          if (error) {
            reject([]);
          } // Resultado incorrecto

          // Resultado correcto
          results.forEach((element: any) => {
            users.push({
              id: element.id,
              name: element.name,
              instructor: element.instructor,
              twitter: element.twitter,
              web: element.web,
            });
          });
          resolve(users);
        });
      });
    },
    user(_, { id }, { connection }) {
      // Devuelvo un usuario por id
      const sql = USER_SELECT_DETAILS;
      return new Promise((resolve, reject) => {
        connection.query(sql, [id], function (error: any, results: any) {
          if (error) {
            reject(null);
          } // Resultado incorrecto

          // Resultado correcto
          const element = results[0];
          let user;

          if (element === undefined || element === null) {
            user = null;
          }else {
            user = {
              id: element.id,
              name: element.name,
              instructor: element.instructor,
              twitter: element.twitter,
              web: element.web,
            };
          }
          resolve( user);

        });
      });
    }
  },
};

export default resolverQueryUsers;
