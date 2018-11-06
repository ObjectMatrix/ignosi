'use strict';

const Joi = require('joi');
const schemas = require('../../models/quiz/schemas');

module.exports = {
  quizRequest: {
    params: {
      id: Joi.string()
        .required()
        .default('07-MATH-7.6.A'),
    },
  },

};
