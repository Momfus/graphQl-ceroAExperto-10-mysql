import GMR from 'graphql-merge-resolvers';
import resolverMutationUsers from './user';

const resolversMutations = GMR.merge([
   resolverMutationUsers
]);

export default resolversMutations;