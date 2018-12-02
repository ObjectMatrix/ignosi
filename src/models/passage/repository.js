'use strict'
const  pool = require('../config/db');
module.exports = () => ({
  /**
   * @param {string} id - id number
   * @param {object} query - querystring
   * @returns {object} an object that a passage
   */

  findOne: (id) => {

    const queryOne =`SELECT pbCurPassage, pbPassageID, pbLessonName, pbPassage,
    pbRandomField, pbRandomizeOrNot,
    pbSequencer, pbPassageType, pbBgPallet, pbSkillCode FROM astabpassagebank where pbLessonName='${id}' ORDER BY pbSequencer + 0`;

    return new Promise((resolve, reject) => {
      pool.query(queryOne, (err, result, fields) => {
        if(err)
          reject(err)
          resolve(result)
      })
    });
  },

});
