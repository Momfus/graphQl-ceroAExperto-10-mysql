import { IResolvers } from 'graphql-tools';
import query from './query';
import types from './types';

const resolvers : IResolvers = {
    ...query,
    ...types
};

export default resolvers;