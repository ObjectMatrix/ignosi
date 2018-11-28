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
    const xxqueryOne =`SELECT q.qbLessonName, q.qbQuestionId, q.qbQuestion,
    q.qbHints, q.qbSolution, q.qbSolution, q.SerialNumber, q.qbLOD, q.qbCurQ,
    p.pbPassage, p.pbSequencer, p.pbPassageType, p.pbSkillCode, p.pbPassageID,
    a.abAnswer, a.abAnswerId, a.abQuestionId, a.abCorrectAnswer
    FROM astabquestionbank q
    LEFT JOIN astabpassagebank p ON q.qbLessonName = p.pbLessonName
    LEFT JOIN astabanswerbank a ON q.qbQuestionId = a.abQuestionId
    WHERE q.qbLessonName ='${id}' ORDER BY p.pbSequencer + 0 ASC`

    // join two table
        // join 3 tables for a lessonName
        const queryOne =`SELECT q.qbLessonName, q.qbQuestionId, q.qbQuestion,
        q.qbHints, q.qbSolution, q.qbSolution, q.SerialNumber, q.qbLOD, q.qbCurQ,
        p.pbPassage, p.pbSequencer, p.pbPassageType, p.pbSkillCode, p.pbPassageID
        FROM astabquestionbank q
        LEFT JOIN astabpassagebank p ON q.qbLessonName = p.pbLessonName
        WHERE q.qbLessonName ='${id}' ORDER BY q.SerialNumber + 0, p.pbSequencer + 0 ASC`
    return new Promise((resolve, reject) => {
      pool.query(queryOne, (err, result, fields) => {
        if(err)
          reject(err)
          resolve(result)
      })
    });
  },

});
