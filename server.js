const express = require('express'); //looking in the modules folder 
const app = express();

app.get('/greeting', (req, res) => {
    res.send(`Hello Stranger`)
})

app.get('/magic/:question', (req,res) => {
    const x = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    res.send(`${req.params.question}: ${x[Math.floor(Math.random() * x.length)]}`)
})

app.get('/tip/:total/:percentage', (req, res) => {
    const x = req.params.total * (req.params.percentage * .01);
    res.send(`${x}`);
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Wow! Hello there ${req.params.name}!`)
})

app.get('/fibonacci/:fib', (req, res) => {
    let x = req.params.fib
    res.send(`${Math.sqrt(5*Math.pow(x,2)-4) % 1 === 0 || Math.sqrt(5*Math.pow(x,2)+4) % 1 === 0 ?  `${x} is` : `${x} is not`}`);
})

app.listen(6969, (err) => {
    console.log('I am running on port 6969');
});

