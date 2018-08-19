'use strict';

const createQuestionModel = require('../../models/question');

module.exports = (dependencies) => {
  const questionModel = createQuestionModel(dependencies);

  return {

    findMany: async (req, h) => {
      try {
          const modelData = await questionModel.findMany(req.params.lessonName);
          return modelData;
      } catch (e) {
          console.log(e);
      }

    },

    findOne: async (req, h) => {
      try {
        const modelData = questionModel.findOne(req.params.id);
        return modelData;
      } catch (e) {
        console.log(e);
      }
    },

    search: async (req, h) => {
      try {
        const modelData = questionModel.search(req.params.term, req.params.level);
        return modelData;
      } catch (e) {
        console.log(e);
      }
    },

  };
};
