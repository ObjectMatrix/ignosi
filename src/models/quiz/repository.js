'use strict'
const  pool = require('../config/db');
module.exports = () => ({
  /**
   * @param {string} id - id number
   * @param {object} query - querystring
   * @returns {object} an object that a passage
   */

  findOne: (id) => {
    // join 3 tables for a lessonName
    const queryOne =`SELECT q.qbLessonName, q.qbQuestionId, q.qbQuestion, q.qbHints, q.qbSolution, q.qbSolution, q.SerialNumber,
    q.qbLOD, q.qbCurQ FROM astabquestionbank q
    LEFT JOIN astabpassagebank ON q.qbLessonName = astabpassagebank.pbLessonName
    LEFT JOIN astabanswerbank
    ON astabpassagebank.pbLessonName = astabanswerbank.abLessonName
    WHERE q.qbLessonName ='${id}'`
    return new Promise((resolve, reject) => {
      pool.query(queryOne, (err, result, fields) => {
        if(err)
          reject(err)
          resolve(result)
      })
    });
  },

});
