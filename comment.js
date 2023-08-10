//Create web server
const express = require('express')
const app = express()
const port = 3000

//Get the data from data.json
const data = require('./data.json')

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

//Set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//Set route
app.get('/', (req, res) => {
  res.render('index', { comments: data.comments })
})

app.post('/', (req, res) => {
  const { name, email, comment } = req.body
  data.comments.push({
    name,
    email,
    comment
  })
  res.render('index', { comments: data.comments })
})

//Start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})


