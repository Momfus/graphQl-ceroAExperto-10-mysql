import GMR from 'graphql-merge-resolvers';
import resolverQueryLanguages from './language';
import resolverQueryUsers from './user';

const resolversQueries = GMR.merge([
    resolverQueryUsers,
    resolverQueryLanguages
]);

export default resolversQueries;