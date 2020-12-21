import { IResolvers } from 'graphql-tools';

const resolverQueryUsers: IResolvers = {
    Query: {
        users() { // Devuelvo una lista de usuarios
            return [
                {
                    id: 1,
                    name: 'Fernando Herrera',
                    instructor: 1,
                    twitter: 'mugan86',
                    web: ''
                }
            ];
        },
        hello(): string {
            return 'Hello world!!';
        },
        helloWithName(_: void, args): string {
            return `Hello ${args.name}!!`;
        },
        helloToGraphQLCourse(): string {
            return 'Hello to GraphQL Course!!';
        }
    }
};

export default resolverQueryUsers;