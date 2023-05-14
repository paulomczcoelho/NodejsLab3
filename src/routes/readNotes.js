const express = require("express");
const router = express.Router();
// const path = require('path')

const { note } = require("./leaveNote");

router.get("/", (req, res, next) => {
  res.send(`
    <p> ${note} </p>
    `);
});

module.exports = {router}
