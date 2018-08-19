'use strict'
const  pool = require('../config/db');
module.exports = () => ({
  /**
   * @param {string} skillId - skill number
   * @param {object} query - querystring
   * @returns {object} an object that a skill
   */

  findOne: (id) => {

    const queryOne =`SELECT pbCurPassage, pbPassageID, pbLessonName, pbPassage,
    pbPassageNoTag, pbRandomField, pbRandomizeOrNot,
    pbSequencer, pbPassageType, pbBgPallet, pbSkillCode FROM astabpassagebank where pbPassageId='${id}'`;

    return new Promise((resolve, reject) => {
      pool.query(queryOne, (err, result, fields) => {
        if(err)
          reject(err)
        resolve(result)
      })
    });
  },

});
