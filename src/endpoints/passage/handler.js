'use strict';

const createPassageModel = require('../../models/passage');

module.exports = (dependencies) => {
  const passageModel = createPassageModel(dependencies);

  return {
    findOne: async (req, h) => {
      try {
        const modelData = passageModel.findOne(req.params.id);
        return modelData;
      } catch (e) {
        console.log(e);
      }
    }
  };
};
