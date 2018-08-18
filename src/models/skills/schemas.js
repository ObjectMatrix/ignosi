'use strict';

const Joi = require('joi');
const schemas = require('../../models/skills/schemas');

module.exports = {
  skillsRequest: {
    params: {
      id: Joi.string()
        .required()
        .default('951'),
    },
  },
};
