'use strict';

const createHandlers = require('./handler');
const schemas = require('../../models/skills/schemas');

module.exports = () => {
  const skillHandlers = createHandlers();
  return {
    name: 'skill',
    register(server) {
      server.route({
        method: 'GET',
        path: '/skills',
        config: {
          cors: true,
          handler: skillHandlers.findMany,
          bind: skillHandlers,
          description: 'Retrieve skill name.',
          tags: ['api', 'skill', 'ignosis'],
        },
      });


      server.route({
        method: 'GET',
        path: '/{id}/skill',
        config: {
          cors: true,
          handler: skillHandlers.findOne,
          bind: skillHandlers,
          description: 'Retrieve specific skill name.',
          tags: ['api', 'skill', 'ignosis'],
          validate: schemas.skillsRequest,
        },
      });


    },
  };
};
