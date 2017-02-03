/**
 * Created by vigohe on 25-01-17.
 */
import express = require('express');
import bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser(bodyParser.json()));

app.get('/', (req, res) => res.json({
    msg: "Hello World"
}));

const server = app.listen(3000, () =>
    console.log(`Server running at http://localhost:' ${server.address().port}`)
);