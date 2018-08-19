'use strict';

const Joi = require('joi');
const schemas = require('../../models/passage/schemas');

module.exports = {
  passageRequest: {
    params: {
      id: Joi.string()
        .required()
        .default('2AB1BE6B-9FBD-4535-9609-12728D62D856'),
    },
  },

};


