require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");
const app = express();


app.use(json());

const port = 3056;

massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db)
}).catch( err => console.log(err) );


app.listen(port, () => console.log(`Listening on ${port}`));