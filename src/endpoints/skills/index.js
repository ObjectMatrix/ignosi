'use strict';

const createHandlers = require('./handler');


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
    },
  };
};
