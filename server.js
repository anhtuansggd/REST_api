//sudo service mongod restart
//npm run devStart
/*
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chown mongodb:mongodb /tmp/mongodb-27017.sock    
sudo service mongod restart
*/

require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewURLParser: true})
const db = mongoose.connection
db.on('error', (error)=>console.error(error))
db.once('open', ()=>console.log('Connected to Databases'))

app.use(express.json())

const subscribersRouter = require('/home/tuan/Study/TMP2/REST_api/routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(3000, () => console.log('Server Started'))