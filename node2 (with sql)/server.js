const express = require("express");
const bodyParser = require("body-parser");
const homeRouter = require("./routes/home");
const loginRouter = require("./routes/login");
const resultRouter = require("./routes/result");
const errorController = require('./controllers/error_controller');
const path = require('path')

const app = express();

//requiring database conf
const db = require('./util/database');

  //middleware setting our template which has been installed
app.set("view engine", "ejs");
//middleare finds template in view
app.set("views", "views");
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

//connecting to routes
app.use(homeRouter);
app.use(loginRouter);
app.use(resultRouter);

app.use(errorController.getError); 

app.listen(3100);


// need to edit and delete
