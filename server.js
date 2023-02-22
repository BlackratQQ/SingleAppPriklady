const express = require('express')
const path = require('path')

const app = express()
//cesta k images, aby byli veřejné
app.use(express.static(path.join(__dirname, 'public')))

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
)

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

app.listen(process.env.PORT || 3000, () => console.log('Server running...'))
