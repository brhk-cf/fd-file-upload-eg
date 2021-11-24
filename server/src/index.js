import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

export default (async function() {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    server.listen(4000, () => {
      console.log(`🚀 server running @ http://localhost:4000`);
    });
  } catch (err) {
    console.error(err);
  }
})();
