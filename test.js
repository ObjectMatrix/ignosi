

 const  getResult = require('./config/db');

const query ='SELECT qeSubject FROM astabquestionentry';
console.log(getResult(query))
