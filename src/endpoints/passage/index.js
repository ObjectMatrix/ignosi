'use strict';

const createHandlers = require('./handler');
const schemas = require('../../models/passage/schemas');

module.exports = () => {
  const passageHandlers = createHandlers();
  return {
    name: 'passage',
    register(server) {
      server.route({
        method: 'GET',
        path: '/{id}/passage',
        config: {
          cors: true,
          handler: passageHandlers.findOne,
          bind: passageHandlers,
          description: 'Retrieve specific passage.',
          tags: ['api', 'passage', 'ignosis'],
          validate: schemas.passageRequest,
        },
      });

    },
  };
};
