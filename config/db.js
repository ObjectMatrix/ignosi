const mysql = require('mysql');
const configs = require(`./config.${process.env.NODE_ENV || "dev"}`);

const pool = mysql.createPool(configs.database);

// const query ='SELECT qeSubject FROM astabquestionentry';

const getResult =(query) => {
  return pool.getConnection((err, connection) => {
    if (err) throw err; 

   return pool.query(query, (error, results, fields) => {
      console.log('xyz The solution is: ', results[0].qeSubject);
      console.log(fields)
      connection.release();
    });
  });
}



module.exports = getResult;

