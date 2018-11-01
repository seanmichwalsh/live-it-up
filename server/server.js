const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const app = express();
const port = 3001; 

app.disable('x-powered-by'); // for security reasons though not fool-proof

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({message : ip});
});

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
.then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now.');
    process.exit();
});

app.use(require('./app/routes'));