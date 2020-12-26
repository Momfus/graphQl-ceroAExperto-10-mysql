import GMR from 'graphql-merge-resolvers';
import resolverMutationLanguage from './language';
import resolverMutationUsers from './user';

const resolversMutations = GMR.merge([
   resolverMutationUsers,
   resolverMutationLanguage
]);

export default resolversMutations;