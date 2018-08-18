const Inert = require('inert');
const Vision = require('vision');
const rootContextPlugin = require('./endpoints');
const skills = require('./endpoints/skills');

module.exports = (serverConfig, dependencies) => {
  const skillsRoutes = skills(dependencies);

  return {
    server: {
      state: {
        strictHeader: false,
        ignoreErrors: true,
      },
      port: serverConfig.port,
    },
    register: {
      plugins: [
        { plugin: Inert },
        { plugin: Vision },

        // Routes.
        { plugin: rootContextPlugin },
        { plugin: skillsRoutes },

      ],
      options: {
        once: true,
      },
    },
  };
};
