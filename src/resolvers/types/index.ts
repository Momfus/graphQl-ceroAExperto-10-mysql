import GMR from 'graphql-merge-resolvers';
import resolverTypesLanguages from './languages';
import resolverTypesUsers from './users';

const resolversTypes = GMR.merge([
   resolverTypesUsers,
   resolverTypesLanguages
]);

export default resolversTypes;