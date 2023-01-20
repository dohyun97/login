const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const user = [
    {
        name:"user1", 
        id:"abcdef",
        password:"123456789"
    },
    {
        name:"user2",
        id:"abcdefg",
        password:"111111111"
    }
]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/api/user', (req, res) => {
  res.send(user)
})

app.post('/api/user',(req,res) =>{
    
    user.push(req.body)
    res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})