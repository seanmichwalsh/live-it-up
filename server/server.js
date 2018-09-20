const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.disable('x-powered-by'); // for security reasons though not fool-proof


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({message : ip});
});

const port = 3001; 
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now.');
    process.exit();
});

app.use(require('./app/routes'));