const express = require('express')
const cors = require('cors')
const routers = require('./routes/index')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/', routers)



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`Server rodando em http://localhost:${PORT}`)
})