import { IResolvers } from 'graphql-tools';
import { USER_LANGUAGES_LIST } from '../../constants/db-operations';

const resolverTypesUsers: IResolvers = {
  User: {
    languages(parent, __, { connection }) {
      const languages = new Array(0);
      const sql = USER_LANGUAGES_LIST;

      return new Promise((resolve, reject) => {
        connection.query(sql, [parent.id], function (error: any, results: any) {
          if (error) {
            reject(languages);
          } // Resultado incorrecto

          // Resultado correcto
          results.forEach((element: any) => {
            languages.push({
              id: element.language,
              name: element.name,
            });
          });
          resolve(languages);
        });
      });
    },
  },
};

export default resolverTypesUsers;
