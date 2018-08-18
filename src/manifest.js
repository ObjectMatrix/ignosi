const Inert = require('inert');
const Vision = require('vision');
const skills = require('./endpoints/skills');

module.exports = (serverConfig, dependencies) => {
  const skillsRoutes = skills(dependencies);
  // const coveragesRoutes = coverages(dependencies);
  // const vehiclesRoutes = vehicles(dependencies);
  // const driversRoutes = drivers(dependencies);
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

        // { plugin: security },

        // Routes.
        { plugin: rootContextPlugin },
        { plugin: skillsRoutes },
        // { plugin: documentRoutes },
        // { plugin: addressRoutes },
        // { plugin: driversRoutes },
        // { plugin: vehiclesRoutes },
        // { plugin: coveragesRoutes },
        // { plugin: policyRoutes },
        // { plugin: summaryRoutes },
        // { plugin: customerRoutes },
        // { plugin: quoteRoutes },
        // { plugin: premiumRoutes },
      ],
      options: {
        once: true,
      },
    },
  };
};
