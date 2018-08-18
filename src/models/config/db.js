'use strict'

const mysql = require('mysql');
// const configs = require(`./config.${process.env.NODE_ENV || "dev"}`);
const configs = require('../../../config/config.dev.json');
const pool = mysql.createPool(configs.database);

pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
  }
  if (connection) connection.release()
  return
})


module.exports = pool;

