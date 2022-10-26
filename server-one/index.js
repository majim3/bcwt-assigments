'use strict'

const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

let requestCounter = 0;

app.use(express.static('public'))
app.set("view engine", 'pug')
//app.get('/', (req, res) => {
  //res.send('Hello World!')
//})


app.get('/catinfo', (req, res) => {
    const cat = {
        name: "pussy cat",
        birthdate: "2010-12-25",
        weight: 5,
      };
      res.json(cat);

})

app.get('/test' , (req, res) => {
    console.log('someone is trying to test me')
    requestCounter++
    //Example of using pug
    res.render('test', {
        title: "pug test page",
        header1:"Puge test page ",
        header2:"counter",
        exampleText :"Page requested "+ requestCounter + " times."
    });
    //basic html as string
   // res.send('<h1>you did it good joob</h1>' + requestCounter + '<p>test works good me</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})