import { IResolvers } from 'graphql-tools';
import { LANGUAGES_LIST, LANGUAGES_SELECT_DETAILS } from '../../constants/db-operations';

const resolverQueryLanguages: IResolvers = {
  Query: {
    languages(_, __, { connection }) {
      // Devuelvo una lista de usuarios

      const languages  = new Array(0);

      const sql = LANGUAGES_LIST;
      return new Promise((resolve, reject) => {
        connection.query(sql, function (error: any, results: any) {
          if (error) {
            reject([]);
          } // Resultado incorrecto

          // Resultado correcto
          results.forEach((element: any) => {
            languages.push({
              id: element.id,
              name: element.name
            });
          });
          resolve(languages);
        });
      });
    },
    
    language(_, { id }, { connection }) {
      // Devuelvo un usuario por id

      const sql = LANGUAGES_SELECT_DETAILS;
      return new Promise((resolve, reject) => {
        connection.query(sql, [id], function (error: any, results: any) {
          if (error) {
            reject(null);
          } // Resultado incorrecto

          // Resultado correcto
          const element = results[0];
          let language;

          if (element === undefined || element === null) {
            language = null;
          }else {
            language = {
              id: element.id,
              name: element.name,
            };
          }
          resolve( language);

        });
      });
    },
  },
};

export default resolverQueryLanguages;
