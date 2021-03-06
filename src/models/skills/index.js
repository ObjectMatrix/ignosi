'use strict';

const createRepository = require('./repository');

module.exports = (dependencies) => {
  const repository = createRepository(dependencies);
  return {
    findOne: (skillId) => repository.findOne(skillId),
    findMany: () =>  repository.findMany(),
    search: (term) => repository.search(term),
    levelsubject: (level, subject)  => repository.levelsubject(level, subject)
  };
};
