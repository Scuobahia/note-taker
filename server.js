var express = require("express");
var path = require("path");
var fs = require("fs");
var PORT = process.env.PORT || 3002;
var app =express();




app.listen(PORT,() => {
    console.log('API listening on PORT ${PORT}!');
});
const { notes } = require('./db/notes');