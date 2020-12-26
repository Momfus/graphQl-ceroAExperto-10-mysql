import { IResolvers } from 'graphql-tools';
import { ADD_LANGUAGE } from '../../constants/db-operations';

const resolverMutationLanguage: IResolvers = {
  Mutation: {
    addLanguage(_, { name }, { connection }) {
      return new Promise((resolve, reject) => {
        connection.query(
          ADD_LANGUAGE,
          [name],
          function (error: any, results: any) {
            if (error) {
              reject(error);
            } // Resultado incorrecto

            // Resultado correcto
            resolve(`Añadido correctamente el lenguaje de programación con el ID ${results.insertId}`);
          }
        );
      });
    },
  },
};

export default resolverMutationLanguage;
