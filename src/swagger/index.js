'use strict';

const Hapi = require('hapi');
const rootContextPlugin = require('../endpoints');

// Swagger router configuration.
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const path = require('path');

const readDir = require('recursive-readdir-sync');

const dir = `${__dirname}/../endpoints`;
const endpoints = [];
const PORT = 3000;

// Setup HAPI server.
const server = Hapi.server({
  host: 'localhost',
  port: PORT,

  // @see: https://hapijs.com/api#-serveroptionsstate
  state: {
    strictHeader: false,
  },
});

server.register([Inert, Vision, HapiSwagger]);

// Group these async functionalities together.
async function startServer() {
  // Synchronously read in each file and grab only the index.js files.
  readDir(dir).forEach(file => {
    if (path.basename(file) === 'index.js') {
      endpoints.push(require(file));
    }
  });

  // Register each endpoint.
  for (const endpoint of endpoints) {
    if (typeof endpoint === 'function') {
      await server.register(endpoint({}));
    } else {
      await server.register(endpoint);
    }
  }

  await server.start();

  // Reset the terminal.
  // console.log('\x1Bc');
  console.log(`Swagger can be found at this url: ${server.info.uri}/documentation\n`);
}

startServer();
