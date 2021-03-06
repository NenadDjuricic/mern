const express = require("express");
const mongoose = require('mongoose');
const bodyParese = require('body-parser');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');


const app = express();
//Body pareser middleware
app.use(bodyParese.urlencoded({
    extended: false
}));
app.use(bodyParese.json());


//db config
const db = require('./config/keys').mongoURI;
//connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Nenad React"));

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port ', port));