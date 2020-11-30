const mysql = require('mysql')

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

const dbConnection = mysql.createConnection(config)

dbConnection.connect(err => {
  if (err) throw err;
  console.log("Database connected!")
})

module.exports = dbConnection