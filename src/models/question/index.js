'use strict';

const createRepository = require('./repository');

module.exports = (dependencies) => {
  const repository = createRepository(dependencies);
  return {
    findOne: (id) => repository.findOne(id),
    findMany: (lessonName) =>  repository.findMany(lessonName),
  };
};
