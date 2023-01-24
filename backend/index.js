const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require("./db")

const user = []


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/api/user',  (req, res) => {
   db.query("SELECT * FROM users;",(err,result) =>{
    console.log(result);
  res.send(result)
  });
})

app.post('/api/user', (req,res) =>{
   const user = {
    "name": req.body.name,
    "id": req.body.id,
    "password": req.body.password
   }
     db.query('INSERT INTO users (name,id,password) VALUES ("'+user.name +'","'+user.id+'","'+user.password+'");' , (err)=>{
        if (err) throw err;
      // db.query("SELECT * FROM users",(err,result) =>{
      //   console.log(result);
      //   res.send(result)
      //   });
     });
     db.query("SELECT * FROM users",(err,result) =>{
      console.log(result);
    res.send(result)
    });
     
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})