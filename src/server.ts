// Imports
import express from 'express'
import helmet from 'helmet'

const app = express()

// Setup helmet
app.use(helmet({
  hidePoweredBy: { setTo: 'PHP/7.2.18-1+ubuntu16.04.1+deb.sury.org+1' }
}))

app.get('/', (req, res) => {
  res.send('OK')
})

app.listen(3000, () => {
  console.log('[OK] Server started on port 3000')
})