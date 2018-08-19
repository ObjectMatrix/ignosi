'use strict';

const createHandlers = require('./handler');
const schemas = require('../../models/question/schemas');

module.exports = () => {
  const questionHandlers = createHandlers();
  return {
    name: 'question',
    register(server) {
      server.route({
        method: 'GET',
        path: '/{lessonName}/questions',
        config: {
          cors: true,
          handler: questionHandlers.findMany,
          bind: questionHandlers,
          description: 'Retrieve question.',
          tags: ['api', 'question', 'ignosis'],
          validate: schemas.lessonNameRequest,
        },
      });

      server.route({
        method: 'GET',
        path: '/{id}/question',
        config: {
          cors: true,
          handler: questionHandlers.findOne,
          bind: questionHandlers,
          description: 'Retrieve specific skill name.',
          tags: ['api', 'skill', 'ignosis'],
          validate: schemas.questionRequest,
        },
      });
    },
  };
};
