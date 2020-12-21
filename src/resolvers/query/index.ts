import GMR from 'graphql-merge-resolvers';
import resolverQueryUsers from './user';

const resolversQueries = GMR.merge([
    resolverQueryUsers
]);

export default resolversQueries;