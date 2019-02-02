const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');
const camelCase = require('lodash.camelcase');
const path = require('path');
const fs = require('fs');

const c = str => {
  str = camelCase(str.replace('.js', ''));
  return str[0].toUpperCase() + str.slice(1);
};

const defaults = {
  schemasDir: 'schemas',
  resolversDir: 'resolvers',
  port: 4000,
};

class Skoallo {
  constructor(options = {}) {
    this.config = { ...defaults, ...options };
    this.rootDir = path.dirname(module.parent.filename);

    const typeDefs = gql`${this._schemas()}`;
    const resolvers = this._resolvers();

    this.server = new ApolloServer({ typeDefs, resolvers });
    this.app = new Koa();

    this.server.applyMiddleware({ app: this.app });
  }

  run() {
    const url = `http://localhost:${this.config.port}`;
    this.app.listen({ port: this.config.port || 4000 }, () => {
      console.log(`🚀 Server ready at ${url}${this.server.graphqlPath}`);
    });
  }

  __load(directory, transformFn) {
    const dirPath = path.join(this.rootDir, directory);
    fs.readdirSync(dirPath).forEach(transformFn);
  }

  _schemas() {
    const schemas = [];
    const directory = this.config.schemasDir;
    this.__load(directory, file => {
      schemas.push(require(`${this.rootDir}/${directory}/${file}`));
    });
    return schemas;
  }

  _resolvers() {
    const resolvers = {};
    const directory = this.config.resolversDir;
    this.__load(directory, file => {
      resolvers[c(file)] = require(`${this.rootDir}/${directory}/${file}`);
    });
    return resolvers;
  }
}

module.exports = Skoallo;

