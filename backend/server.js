const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyparser = require('body-parser');
    require('express-async-errors');

const db = require('./models/db');
const carehomeRoutes = require('./controllers/carehomeController.js');
const searchRoutes = require('./controllers/searchController.js');



// //middleware
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET"],
    allowedHeaders:["Content-Type"]
}));

app.use(bodyparser.json());
app.use(express.static("public"));
app.use('/api/carehome/search', searchRoutes);
app.use('/api/carehome', carehomeRoutes);
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})



//first make sure db connection is successful
//then start the express server.

db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(5000,
            () => console.log('server started at 5000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))
    
    /*
    change image url on data.js as like /images/pic.jpg
    and upload data from data.js file 
    connect reactjs with nodejs
    */