const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // to serve images, CSS files, and JavaScript files in a directory named public
// http://localhost:3000/images/cat.png

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/cat', (req, res) => {
    res.redirect('/images/cat.png')
})

// Each route can have one or more handler functions, which are executed when the route is matched.
// app.METHOD(PATH, HANDLER)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})