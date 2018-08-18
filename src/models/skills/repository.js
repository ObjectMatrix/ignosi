'use strict'
const  pool = require('../config/db');
module.exports = () => ({
  findMany: () => {

    const queryMany =`SELECT qeSubject, qeGrade, qeObjective, qeSkill,
    qeSubSkill, qeSubSubSkill, qeLessonName, qeSerialNumber,
    qeMastery, qeRetries, qeRandomQuestion, qeInstruction,
    qeDomainName, qeReadyToGo FROM astabquestionentry`;

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
    qeDomainName, qeReadyToGo FROM astabquestionentry where qeSerialNumber=${id}`;

    return new Promise((resolve, reject) => {
      pool.query(queryOne, (err, result, fields) => {
        if(err)
          reject(err)
        resolve(result)
      })
    });
  },
});
