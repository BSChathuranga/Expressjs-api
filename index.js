const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello get!')
})

app.post('/', (req, res) => {
  res.send('Hello post!')
})

app.put('/', (req, res) => {
  res.send('Hello put!')
})

app.delete('/', (req, res) => {
  res.send('Hello delete')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
