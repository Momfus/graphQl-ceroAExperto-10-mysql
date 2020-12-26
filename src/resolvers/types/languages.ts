import { IResolvers } from 'graphql-tools';
import { LANGUAGES_USER_LIST, USER_LANGUAGES_LIST } from '../../constants/db-operations';

const resolverTypesLanguages: IResolvers = {
  Language: {
    users(parent, __, { connection }) {
      // console.log(parent);
      const users = new Array(0);
      const sql = LANGUAGES_USER_LIST;

      return new Promise((resolve, reject) => {
        connection.query(sql, [parent.id], function (error: any, results: any) {
          if (error) {
            reject(users);
          } // Resultado incorrecto

          // Resultado correcto
          results.forEach((element: any) => {
            users.push({
              id: element.user,
              name: element.name,
              instructor: element.instructor,
              twitter: element.twitter,
              web: element.web
            });
          });
          resolve(users);
        });
      });
    },
  },
};

export default resolverTypesLanguages;
