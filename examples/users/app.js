const Skoallo = require('../../index');
const models = require('./models');

const context = { models, me: models.users[1] };
const server = new Skoallo({ context });

server.run();
