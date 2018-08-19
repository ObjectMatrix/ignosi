'use strict';

const createHandlers = require('./handler');
const schemas = require('../../models/answer/schemas');

module.exports = () => {
  const answerHandlers = createHandlers();
  return {
    name: 'answer',
    register(server) {
      server.route({
        method: 'GET',
        path: '/{id}/answer',
        config: {
          cors: true,
          handler: answerHandlers.findOne,
          bind: answerHandlers,
          description: 'Retrieve specific answers.',
          tags: ['api', 'answers', 'ignosis'],
          validate: schemas.answerRequest,
        },
      });

    },
  };
};
