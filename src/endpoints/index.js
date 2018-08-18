'use strict';

/**
 * This root context plugin is required for
 * service discovery and health checks.
 */
const register = function rootContextPlugin(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler() {
      /* eslint-disable no-process-env */
      // for non prod environment expose env variables for debug/diagnostics
      const ENV = process.env.APP_ENV.toLowerCase();
      const restrictEnv = ['prod', 'production'];
      if (!restrictEnv.includes(ENV)) {
        return JSON.stringify(process.env);
      }
      return { message: `ignosis at: ${ENV}` };
    },
  });
  server.route({
    method: 'GET',
    path: '/info',
    handler() {
      /* eslint-disable no-process-env */
      return 'ok';
    },
  });
  server.route({
    method: 'GET',
    path: '/health',
    handler() {
      /* eslint-disable no-process-env */
      return 'ok';
    },
  });
};

module.exports = {
  register,
  name: 'rootContextPlugin',
};
