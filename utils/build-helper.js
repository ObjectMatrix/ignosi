const semver = require('semver');
const git = require('git-rev-sync');
const packageJSON = require('../package.json');
const { execSync } = require('child_process');
const parseArgs = require('minimist');

let output = null;

// minimist parses functions to be run in shell
// ex: node utils.js --serviceName
const options = parseArgs(process.argv.slice(2), {
  default: {
    'service-name': false,
    'service-version': false,
    'increment-version': false,
    'service-deploy-name': false,
  },
});

const serviceName = function serviceName() {
  return packageJSON.name;
};

// Return version with git short head added
const serviceVersion = function serviceVersion() {
  const short = git.short();
  let { version } = packageJSON;
  version = `${version}.${short}`;
  return version;
};

// Increment version by release type
// releaseType: major, minor, patch
const incrementVersion = function incrementVersion(releaseType) {
  let version;
  const releaseTypeArray = ['major', 'minor', 'patch'];

  if (releaseTypeArray.includes(releaseType)) {
    const cmd = `npm --no-git-tag-version version ${releaseType.replace(/\s/g, '')}`;
    version = execSync(cmd).toString();
  } else {
    process.exit(0);
  }
  return version;
};

// Grab project and name a major version number to create deploy name
const serviceDeployName = function serviceDeployName() {
  let { name } = packageJSON;
  const majorVersion = semver.major(packageJSON.version);
  name = `${name}-v${majorVersion}`;
  return name;
};

// used with minimist and running parsed functions in shell
if (options['service-name']) {
  output = serviceName();
} else if (options['service-version']) {
  output = serviceVersion();
} else if (options['increment-version']) {
  output = incrementVersion(options['increment-version']);
} else if (options['service-deploy-name']) {
  output = serviceDeployName();
} else {
  process.exit(1);
}
// leave ths console log here, it's actually the output
console.log(output);
process.exit(0);
