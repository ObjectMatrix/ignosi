'use strict'
const  pool = require('../config/db');
module.exports = () => ({
  findMany: () => {

    const queryMany =`SELECT qeSubject, qeGrade, qeObjective, qeSkill,
    qeSubSkill, qeSubSubSkill, qeLessonName, qeSerialNumber,
    qeMastery, qeRetries, qeRandomQuestion, qeInstruction,
    qeDomainName, qeReadyToGo, Created, Modified FROM astabquestionentry order by qeGrade + 0, qeSubject`;

    return new Promise((resolve, reject) => {
      pool.query(queryMany, (err, result, fields) => {

        if(err)
          reject(err)
        resolve(result)
      })
    });
  },

  /**
   * @param {string} skillId - skill number
   * @param {object} query - querystring
   * @returns {object} an object that a skill
   */

  findOne: (id) => {

    const queryOne =`SELECT qeSubject, qeGrade, qeObjective, qeSkill,
    qeSubSkill, qeSubSubSkill, qeLessonName, qeSerialNumber,
    qeMastery, qeRetries, qeRandomQuestion, qeInstruction,
    qeDomainName, qeReadyToGo, Created, Modified FROM astabquestionentry where qeSerialNumber=${id}`;

    return new Promise((resolve, reject) => {
      pool.query(queryOne, (err, result, fields) => {
        if(err)
          reject(err)
        resolve(result)
      })
    });
  },


search: (term) => {
    const querySearch =`SELECT qeSubject, qeGrade, qeObjective, qeSkill,
    qeSubSkill, qeSubSubSkill, qeLessonName, qeSerialNumber,
    qeMastery, qeRetries, qeRandomQuestion, qeInstruction,
    qeDomainName, qeReadyToGo, Created, Modified FROM astabquestionentry where
    (qeSubject like '%${term}%'
    OR qeObjective like '%${term}%'
    OR qeSkill like '%${term}%'
    OR qeSubSkill like '%${term}%'
    OR qeSubSubSkill like '%${term}%'
    OR qeLessonName like '%${term}%') OR qeGrade like '%${term}%'`;

    return new Promise((resolve, reject) => {
      pool.query(querySearch, (err, result, fields) => {
        if(err)
          reject(err)
        resolve(result)
      })
    });
  },
  levelsubject: (level, subject) => {
    const querylevelsubjectSearch =`SELECT qeSubject, qeGrade, qeObjective, qeSkill,
    qeSubSkill, qeSubSubSkill, qeLessonName, qeSerialNumber,
    qeMastery, qeRetries, qeRandomQuestion, qeInstruction,
    qeDomainName, qeReadyToGo, Created, Modified FROM astabquestionentry where
    qeGrade = '${level}'
    AND qeSubject = '${subject}'`;

    return new Promise((resolve, reject) => {
      pool.query(querylevelsubjectSearch, (err, result, fields) => {
        if(err)
          reject(err)
        resolve(result)
      })
    });
  },


});
