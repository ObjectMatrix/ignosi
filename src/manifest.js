const Inert = require('inert');
const Vision = require('vision');
const rootContextPlugin = require('./endpoints');
const skills = require('./endpoints/skills');
const questions = require('./endpoints/question');
const passage = require('./endpoints/passage');
const answer = require('./endpoints/answer');

module.exports = (serverConfig, dependencies) => {
  const skillsRoutes    = skills(dependencies);
  const questionsRoute  = questions(dependencies);
  const passageRoute    = passage(dependencies);
  const answerRoute     = answer(dependencies);
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
        { plugin: questionsRoute },
        { plugin: passageRoute },
        { plugin: answerRoute }

      ],
      options: {
        once: true,
      },
    },
  };
};
