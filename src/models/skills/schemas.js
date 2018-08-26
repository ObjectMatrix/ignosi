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

  skillsearch: {
    params: {
      term: Joi.string()
        .required()
        .default('Mathematics'),
      level: Joi.string()
        .required()
        .default('8'),
    },
  },

  levelsubjectsearch: {
    params: {
      level: Joi.string()
        .required()
        .default('8'),
      subject: Joi.string()
        .required()
        .default('Mathematics'),
    },
  },

};


