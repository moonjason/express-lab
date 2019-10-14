const express = require('express'); //looking in the modules folder 
const app = express();

app.get('/greeting', (req, res) => {
    res.send(`Hello Stranger`)
})

app.get('/tip/:total/:percentage', (req, res) => {
    const x = req.params.total * (req.params.percentage * .01);
    res.send(`${x}`);
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Wow! Hello there ${req.params.name}!`)
})

app.listen(6969, (err) => {
    console.log('I am running on port 6969');
});

