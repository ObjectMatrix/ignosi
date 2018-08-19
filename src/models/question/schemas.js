'use strict';

const Joi = require('joi');
const schemas = require('../../models/question/schemas');

module.exports = {
  lessonNameRequest: {
    params: {
      lessonName: Joi.string()
        .required()
        .default('07-MATH-7.6.A'),
    },
  },

  questionRequest: {
    params: {
      id: Joi.string()
        .required()
        .default('E8E66531-6B3C-440A-84F9-6C568A20D2E8'),
    },
  },

};


