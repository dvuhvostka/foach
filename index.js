const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./src/schema.js');
const { resolvers } = require('./src/resolvers.js');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({
    port: 4003
}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});