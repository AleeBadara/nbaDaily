
const express = require('express');
var cors = require('cors')

let app = express();

app.use(cors())
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('App listening at port 3000');
});