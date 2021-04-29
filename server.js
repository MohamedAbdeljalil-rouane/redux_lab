// requiring modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");

//creaate app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))



//get monogoDB connection URI
const db  = require("./config/keys").mongoURI;

//create connection to MyFirstDatabase
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log("MongoDB connected ...");
})
.catch(function(err){
    console.log(err);
});

//use routes
app.use("/api/items", items);


const port = process.env.PORT || 5000 ;
//listening to te port
app.listen(port, function(){
    console.log("Server started on port: "+port);
});

