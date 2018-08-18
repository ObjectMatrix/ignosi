'use strict';

const createSkillsModel = require('../../models/skills');

module.exports = (dependencies) => {
  const skillsModel = createSkillsModel(dependencies);

  return {

    findMany: async (req, h) => {
      try {
          const modelData = await skillsModel.findMany();
          return modelData;
      } catch (e) {
          console.log(e);
      }

    },

    findOne: async (req, h) => {
      try {
        const modelData = skillsModel.findOne(req.params.id);
        return modelData;
      } catch (e) {
        console.log(e);
      }
    },

    search: async (req, h) => {
      try {
        const modelData = skillsModel.search(req.params.term);
        return modelData;
      } catch (e) {
        console.log(e);
      }
    },

  };
};
