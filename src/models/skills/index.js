'use strict';

const createRepository = require('./repository');

module.exports = (dependencies) => {
  const repository = createRepository(dependencies);
  return {
    // findOne: (id, query) => repository.findOne(id, query),
    findMany: () =>  repository.findMany()
  };
};
