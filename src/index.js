const express = require('express')
const app = express()
const port = 3000
const morgan = require("morgan")
const path = require("path");
//  --- handle bars
const handlebars  = require('express-handlebars');

app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,"resources/views"));

app.use(morgan('combined'))

app.get('/trangchu', (req, res) => {

  res.render('home');
})

app.get('/tintuc', (req, res) => {

  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})