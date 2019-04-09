// Require any needed modules
var express = require('express')

// Declare an express app
var app = express()

// Settings type stuff
// Serve my static folder
app.use('/', express.static('public'))

// Set the view engine (templating engine)
app.set('view engine', 'ejs')

// Declare some routes
app.get('/', function(req, res) {
  res.render('index', {
    name: 'Brandi',
    foods: ['sushi', 'bbq', 'pizza'],
    favoriteNum: 8,
    age: 33
  })
})

app.get('/greeting/:name', function(req, res) {
  res.send('<h1>hello ' + req.params.name + '</h1>')
})

// Include any routes from your router(s)
app.use('/about', require('./controllers/about'))

// Error Page/Catch all
app.get('*', function(req, res) {
  res.send('<h1>Uh-oh!!!</h1><h2>404: Not Found</h2>')
})

// Listen on specified port
app.listen(3000, function() {
  console.log('Yawn! Good morning! I am awake now! ☕')
})
