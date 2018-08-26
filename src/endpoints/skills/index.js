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

      server.route({
        method: 'GET',
        path: '/{term}/{level}/search',
        config: {
          cors: true,
          handler: skillHandlers.search,
          bind: skillHandlers,
          description: 'search skill name.',
          tags: ['api', 'skill', 'ignosis'],
          validate: schemas.skillsearch,
        },
      });

      server.route({
        method: 'GET',
        path: '/{level}/{subject}/levelsubject',
        config: {
          cors: true,
          handler: skillHandlers.levelsubject,
          bind: skillHandlers,
          description: 'search by level and subject.',
          tags: ['api', 'skill', 'ignosis'],
          validate: schemas.levelsubjectsearch,
        },
      });


    },
  };
};
