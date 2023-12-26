const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_manager")

const express = require("express");
const app = express();
const nocache = require('nocache');
const port = process.env.PORT || 3000;

app.use(nocache());
//for user route
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

//for admin route
const adminRoute = require('./routes/adminRoute');
app.use('/admin',adminRoute);

app.listen(port, function(){
    console.log(`Server is running...! connect with http://localhost:${port}`);
});