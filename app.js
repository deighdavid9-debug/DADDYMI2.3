require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors({ origin: '*', credentials: true }))
app.use(cookieParser())

app.use('/api', require('./routes'))

const PORT = process.env.PORT || 6000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch(err => console.error(err))
