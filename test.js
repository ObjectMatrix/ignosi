

const  pool = require('./src/models/config/db');


const query =`SELECT qeSubject, qeGrade, qeObjective, qeSkill,
qeSubSkill, qeSubSubSkill, qeLessonName,qeSerialNumber,
qeMastery, qeRetries, qeRandomQuestion, qeInstruction,
qeDomainName, qeReadyToGo FROM astabquestionentry`;

const test = new Promise((resolve, reject) => {
  pool.query(query, (err, result, fields) => {
    if(err)
      reject(err)
    resolve(result)
  })
});

test.then((x) => {
  console.log(x);
})
