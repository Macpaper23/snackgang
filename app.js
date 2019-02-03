const path = require('path');
const express = require("express");
const app = express();
const port = process.env.PORT || 9256;

app.set('view engine', 'ejs');
app.set('views', 'views');

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));


// app.use('/nigga', (req, res) => {
//     res.send('<h1>niggas</h1>');
// });

app.use('/', (req, res) => {
    res.render('index');
    // console.log(dir);
});

app.listen(port, function() {
    console.log("we're up fellas");
});