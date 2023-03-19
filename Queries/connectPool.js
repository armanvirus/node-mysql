const mysql = require("mysql2/promise")

 module.exports = async()=>{
    const pool = await mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'test',
        waitForConnections: true,
      });

      return pool;
}