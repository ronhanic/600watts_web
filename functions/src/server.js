const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const admin = require('firebase-admin');

const cors = require('cors')({origin: true});

  

app.use(cors)
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended:false}))
.use("/languages",require("./lib/languages/route"))
.get('*',(_,res) => res.status(404).json({success:false,data:"Endpoint not found"}));

module.exports = app;
