/**
 * Created by vigohe on 25-01-17.
 */
import express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!!!'));

const server = app.listen(3000, () =>
    console.log(`Server running at http://localhost:' ${server.address().port}`)
);