const express = require ('express');
const app = express();

const { users } = require('./data')

app.get('/', (req, res) => {
    res.json(users)
})

app.listen(5001, () => {
    console.log('Server is listening on port 5000')
})