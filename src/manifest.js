const Inert = require('inert');
const Vision = require('vision');
const rootContextPlugin = require('./endpoints');
const skills = require('./endpoints/skills');
const levelsubject = require('./endpoints/skills');
const questions = require('./endpoints/question');
const passage = require('./endpoints/passage');
const answer = require('./endpoints/answer');
const quiz = require('./endpoints/quiz');
const search = require('./endpoints/skills');

module.exports = (serverConfig, dependencies) => {
  const skillsRoutes        = skills(dependencies);
  const levelsubjectRoutes  = levelsubject(dependencies);
  const questionsRoute      = questions(dependencies);
  const passageRoute        = passage(dependencies);
  const answerRoute         = answer(dependencies);
  const quizRoute           = quiz(dependencies);
  const searchRoute         = search(dependencies)
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
        { plugin: quizRoute },
        { plugin: rootContextPlugin },
        { plugin: skillsRoutes },
        { plugin: levelsubjectRoutes },
        { plugin: questionsRoute },
        { plugin: passageRoute },
        { plugin: answerRoute },
        { plugin: searchRoute }

      ],
      options: {
        once: true,
      },
    },
  };
};
