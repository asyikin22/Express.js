const express = require('express')
const path = require('path');
const logger = require('./MIDDLEWARE/logger')


const app = express();

//Initialize middleware 'logger'

// app.use(logger)

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set static folder
app.use(express.static('../public'))

//ROUTER MIDDLEWARE MOUNTING /  USERS API ROUTE
app.use('/api/users', require('./route-users'));

const PORT = process.env.PORT || 5005;

app.listen (PORT, () => console.log(`Server started on port ${PORT}`));

