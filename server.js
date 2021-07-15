var express = require("express");
var path = require("path");
var fs = require("fs");
var jsondb = require("./db/db.json");
const { v4: uuidv4 } = require('uuid');
const { json } = require("express");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});