'use strict';
const pjson = require('../../package.json');
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
      const ENV = process.env.APP_ENV ? process.env.APP_ENV.toLowerCase() : 'dev'
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
      return 'ok: info';
    },
  });
  server.route({
    method: 'GET',
    path: '/health',
    handler() {
      /* eslint-disable no-process-env */
      const version = pjson.version;
      return `ok: health for package: ${version}`
    },
  });
};

module.exports = {
  register,
  name: 'rootContextPlugin',
};
