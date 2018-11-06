'use strict';

const createHandlers = require('./handler');
const schemas = require('../../models/quiz/schemas');

module.exports = () => {
  const quizHandlers = createHandlers();
  return {
    name: 'quiz',
    register(server) {
      server.route({
        method: 'GET',
        path: '/{id}/quiz',
        config: {
          cors: true,
          handler: quizHandlers.findOne,
          bind: quizHandlers,
          description: 'Retrieve specific passage.',
          tags: ['api', 'passage', 'ignosis'],
          validate: schemas.quizRequest,
        },
      });

    },
  };
};
