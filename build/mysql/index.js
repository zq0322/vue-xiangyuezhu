
const mysql = require('mysql');

// 使用连接池去连接服务器
const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123321',
  database: '07b'
})

module.exports = pool;

