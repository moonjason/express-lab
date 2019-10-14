const express = require('express'); //looking in the modules folder 
const app = express();

app.get('/greeting', (req, res) => {
    res.send(`Hello Stranger`)
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
})

app.listen(6969, (err) => {
    console.log('I am running on port 6969');
});
