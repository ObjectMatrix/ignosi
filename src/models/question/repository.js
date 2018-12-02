'use strict'
const  pool = require('../config/db');
module.exports = () => ({
  findMany: (lessonName) => {

    const queryMany =`SELECT qbQuestionId, qbQuestion,
    qbHints, qbRandomField, qbPassageId, qbLessonName,
    SerialNumber, qbSolution,
    qbLOD, qbUser, Modified, Created FROM astabquestionbank where qbLessonName='${lessonName}'`;

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
    // example: questionId: 51F49A64-2787-41DA-BF60-78E0CBE973F9
    const queryOne =`SELECT qbQuestionId, qbQuestion,
    qbHints, qbRandomField, qbPassageId, qbLessonName,
    SerialNumber, qbSolution,
    qbLOD, qbUser, Modified, created FROM astabquestionbank where qbQuestionId='${id}'`;

    return new Promise((resolve, reject) => {
      pool.query(queryOne, (err, result, fields) => {
        if(err)
          reject(err)
        resolve(result)
      })
    });
  },

});
