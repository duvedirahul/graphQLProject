const mongoose = require("mongoose");

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./GraphQL/typeDefs");
const resolvers = require("./GraphQL/resolvers");

async function startServer() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use((req, res) => {
    res.send("Hello from apollo Server!!!");
  });

  await mongoose.connect(

    "mongodb+srv://iamastudent:iamastudent@cluster0.fbwovin.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log("Application is connected to database");

  app.listen(3001, () => {
    console.log("BackEnd Apollo server is running at port 3001");
  });
}

startServer();
