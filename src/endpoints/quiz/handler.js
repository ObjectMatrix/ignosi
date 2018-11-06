'use strict';

module.exports = (dependencies) => {
const createQuizModel = require('../../models/quiz');
const quizModel = createQuizModel(dependencies);
  return {
    findOne: async (req, h) => {
      try {
        const modelData = quizModel.findOne(req.params.id);
        return modelData;
      } catch (e) {
        console.log(e);
      }
    }
  };
};
