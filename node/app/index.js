const express = require('express')
const dbConnection = require('./db.js')

const app = express()
const port = 3000



const startupSql = `CREATE TABLE IF NOT EXISTS people(id int auto_increment, name varchar(255), primary key(id))`
const searchSql = 'SELECT * from people'

dbConnection.query(startupSql)

app.get('/', (request, resp) => {
  const name = 'Lucas ' + Date.now()
  const addSql = `INSERT INTO people(name) values('${name}')`
  response = '<h1>Full Cycle Rocks!</h1>'

  dbConnection.query(addSql, (err, res) => {
    if (err) {
      console.log("error: ", err)
    } else {
      console.log(res.insertId)
    }
  })

  dbConnection.query(searchSql, (err, res) => {
    if (err) {
      console.log("error: ", err)
    } else {
      const names = res.map(item => item.name)
      
      for (var i = 0; i < names.length; i++) {
        response += `<p>${i+1} - ${names[i]}</p>`
      }

      resp.send(response)
    }
  })
})

app.listen(port, () => {
  console.log('Running on port ' + port)
})