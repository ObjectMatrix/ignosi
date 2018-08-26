'use strict';

const createRepository = require('./repository');

module.exports = (dependencies) => {
  const repository = createRepository(dependencies);
  return {
    findOne: (skillId) => repository.findOne(skillId),
    findMany: () =>  repository.findMany(),
    search: (term, level) => repository.search(term, level),
    levelsubject: (level, subject)  => repository.levelsubject(level, subject)
  };
};
