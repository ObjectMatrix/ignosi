'use strict'

module.exports = () => ({
  findMany: () => {

    const query =`SELECT qeSubject, qeGrade, qeObjective, qeSkill,
    qeSubSkill, qeSubSubSkill, qeLessonName,qeSerialNumber,
    qeMastery, qeRetries, qeRandomQuestion, qeInstruction,
    qeDomainName, qeReadyToGo FROM astabquestionentry`;

    return new Promise((resolve, reject) => {
      pool.query(query, (err, result, fields) => {
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
  findOne: async (skillId) => {
  },

});
