const Glue = require('glue');

const appPackage = require('./package.json');
const createManifest = require('./src/manifest');

const serverConfig = require('./config/config.dev.json');

// start the server
const startApp = async () => {
  try {
    const dependencies = {};
    const manifest = createManifest(serverConfig.server, dependencies);
    const server = await Glue.compose(manifest, manifest.options);
    await server.start();
  } catch (err) {
    console.log(err)
    process.exit(1);
  }
};

startApp();
