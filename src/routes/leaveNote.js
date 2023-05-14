const express = require('express')
const router = express.Router()
const path = require('path')

const note = []

router.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views', 'leaveNote.html')) 
})

router.post("/", (req, res, next) => {
    const noteContent = req.body.note;
    note.push({ noteContent});
    res.redirect("/home");
  });
  
  module.exports = {
    note: note,
    router: router
  };