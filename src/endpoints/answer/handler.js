'use strict';

const createAnswerModel = require('../../models/answer');

module.exports = (dependencies) => {
  const answerModel = createAnswerModel(dependencies);

  return {
    findOne: async (req, h) => {
      try {
        const modelData = answerModel.findOne(req.params.id);
        return modelData;
      } catch (e) {
        console.log(e);
      }
    }
  };
};
