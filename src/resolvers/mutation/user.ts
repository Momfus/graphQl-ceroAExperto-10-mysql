import { IResolvers } from 'graphql-tools';
import { ADD_USER } from '../../constants/db-operations';

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
  },
};

export default resolverMutationUsers;
