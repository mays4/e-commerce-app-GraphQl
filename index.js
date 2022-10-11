const { ApolloServer } = require("apollo-server");
//String! should return string
const {typeDefs}= require("./schema")
const {db} = require("./db")
 const {Query} = require("./resolvers/Query");
 const {Category} = require("./resolvers/Category");
 const {Product} = require("./resolvers/Product");
  const {Mutation} = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Product,Category,Mutation
  },
  context:{
    db
    // categories,products,reviews
    // sayHello:()=>{
    //    console.log("Hello My friends")
    // }
  }
});
server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
