'use strict'
const  pool = require('../config/db');
module.exports = () => ({
  /**
   * @param {string} answerId - answer number
   * @param {object} query - querystring
   * @returns {object} an object that a answer
   */

  findOne: (id) => {

    const queryOne =`SELECT abAnswerId, abQuestionId, abAnswer,
    abCorrectAnswer, abRandomField, abLessonName, abPlainCorrectAnswer
    FROM astabanswerbank where abLessonName ='${id}' order by abAnswer`;

    return new Promise((resolve, reject) => {
      pool.query(queryOne, (err, result, fields) => {
        if(err)
          reject(err)
        resolve(result)
      })
    });
  },

});
