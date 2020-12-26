import GMR from 'graphql-merge-resolvers';
import resolverTypesUsers from './users';

const resolversTypes = GMR.merge([
   resolverTypesUsers,
]);

export default resolversTypes;