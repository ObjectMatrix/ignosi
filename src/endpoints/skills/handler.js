'use strict';

const createSkillsModel = require('../../models/skills');

module.exports = (dependencies) => {
  const skillsModel = createSkillsModel(dependencies);

  return {

    findMany: async (req, h) => {
      try {
          const modelData = await skillsModel.findMany();
      } catch (e) {
          console.log(e);
      }

    },
  };
};
