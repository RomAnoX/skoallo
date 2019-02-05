const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');
const camelCase = require('lodash.camelcase');
const path = require('path');
const fs = require('fs');
const util = require('util');

const c = str => {
  str = camelCase(str.replace('.js', ''));
  return str[0].toUpperCase() + str.slice(1);
};

const defaults = {
  schemasDir: 'schemas',
  resolversDir: 'resolvers',
  port: 4000,
  context: {},
  debug: false
};

class Skoallo {
  constructor(options = {}) {
    this.config = { ...defaults, ...options };
    this.rootDir = path.dirname(module.parent.filename);

    this.schemas = this._schemas();
    this.resolvers = this._resolvers();

    const typeDefs = gql`${this.schemas}`;
    const resolvers = this.resolvers;
    const context = this.config.context;

    this.server = new ApolloServer({ typeDefs, resolvers, context });
    this.app = new Koa();

    this.server.applyMiddleware({ app: this.app });
  }

  run() {
    const url = `http://localhost:${this.config.port}`;
    this.app.listen({ port: this.config.port || 4000 }, () => {
      console.log(`🚀 Server ready at ${url}${this.server.graphqlPath}`);
      if (this.config.debug) {
        console.log('SCHEMA: ', this.schemas.join("\n"));
        console.log("RESOLVERS:\n", util.inspect(this.resolvers, false, null));
      }
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

