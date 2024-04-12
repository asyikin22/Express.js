const express = require ('express');
const app = express();

const { users } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/users">Users</a>')
})

app.get('/api/users', (req, res) => {
    const newUsers = users.map((user) => {
        const {id, name, email} = user;
        return{id, name, email};
    })
    res.json(newUsers)
})

// //For small data
// app.get('/api/users/1', (req, res) => {
//     const singleUser = users.find((user) => user.id === 1)
//     res.json(singleUser)
// })

app.get('/api/users/:userID', (req, res) => {
   
    const {userID} = req.params;

    const singleUser = users.find((user) => user.id === Number (userID))
    
    if(!singleUser) {
        return res.status(404).send('User Does Not Exist')
    }
    
    res.json(singleUser)
})

app.listen(5001, () => {
    console.log('Server is listening on port 5000')
})


