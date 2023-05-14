const http = require('http')
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./routes/home'))
app.use('/leaveNote',require('./routes/leaveNote'))
app.use('/readNotes',require('./routes/readNotes'))

app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views','404.html'))
})


app.listen(8100,()=>{
    console.log(`Server listening on port 8100`);
})