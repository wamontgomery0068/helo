require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");
const app = express();


app.use(json());

const port = 3056;









app.listen(port, () => console.log(`Listening on ${port}`));