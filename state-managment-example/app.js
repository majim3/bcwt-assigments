'use strict';
const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express();
const port = 3000;

const dummyUser ={
  username: 'foo',
  password: 'bar'
}
let loggedIn = false;

app.set('views', './views');
app.set('view engine', 'pug');
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
secret: 'hhyjhhghnbgggtrdgtr5tgtytkjhmhmjuuyjuyjhhfgfgg', 
saveUninitialized: false,
resave: true,
cookie: {maxAge: 60000}

}));

app.get('/', (req, res) => {
  res.render('home'); 
});

app.get('/getCookie', (req, res) => {
  console.log(req.cookies)
  res.send('your color choise was: ' + req.params.color);
});

app.get('/form', (req, res) => {
 res.render('form')
});

app.get('/secret', (req, res) => {
  if(req.session.loggedIn){
    res.render('secret')
  }else{
    res.redirect('/form')
  }
 });

 app.post('/login', (req, res) => {
  //check username and password if they match
  console.log(req.params.session)
  if(req.body.username == dummyUser.username && req.body.password == dummyUser.password){
    loggedIn = true
    req.session.loggedIn = true
  }
});

  app.get('/logout', (req, res) => {
    session.loggedIn = false;
   // res.clearCookie('connect.sid')
  res.redirect('/')
    });

app.get('/deleteCookie', (req, res) => {
res.clearCookie('color')
res.send("color cookie deleted ")
});

app.get('/setCookie/:color', (req,res)=>{
  console.log(req.params.color)
  res.cookie('color', req.params.color)
  res.send('cookie set')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
