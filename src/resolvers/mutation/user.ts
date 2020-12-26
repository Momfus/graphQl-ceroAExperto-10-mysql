import { IResolvers } from 'graphql-tools';
import { ADD_USER, UPDATE_USER } from '../../constants/db-operations';

const resolverMutationUsers: IResolvers = {
  Mutation: {
    addUser(_, { user }, { connection }) {
      return new Promise((resolve, reject) => {
        connection.query(
          ADD_USER,
          [user.name, user.instructor, user.twitter, user.web],
          function (error: any, results: any) {
            if (error) {
              reject(error);
            } // Resultado incorrecto

            // Resultado correcto
            resolve(`Añadido correctamente el usuario con el ID ${results.insertId}`);
          }
        );
      });
    },
    updateUser(_, { user }, { connection }) {
      return new Promise((resolve, reject) => {
        connection.query(
          UPDATE_USER,
          [user.name, user.instructor, user.twitter, user.web, user.id],
          function (error: any, results: any) {
            if (error) {
              reject(error);
            } // Resultado incorrecto

            // Resultado correcto
            resolve(`Modificado correctamente el usuario con el ID ${user.id}`);
          }
        );
      });
    },
  },
};

export default resolverMutationUsers;
