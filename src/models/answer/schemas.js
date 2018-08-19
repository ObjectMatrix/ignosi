'use strict';

const Joi = require('joi');
const schemas = require('../../models/answer/schemas');

module.exports = {
  answerRequest: {
    params: {
      id: Joi.string()
        .required()
        .default('ABEAEE4A-4B75-4F08-B032-AA8B26'),
    },
  },
};


