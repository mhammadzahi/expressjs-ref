const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');// json
const myScript = require('./scripts/myScript');



const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// optional if using default 'views' directory
app.set('views', './templates');

app.use(express.static('static'))
app.use(bodyParser.json());

// express-session middleware
app.use(session({
    secret: 'yedwsmrdmwsajufdey',
    resave: false,
    saveUninitialized: true,
}));

app.get('/', (req, res) => {
    myScript.sayHello();
    myScript.sayHi();
    let username = req.session.username || 'Muhammad';

    if(!req.session.username){
        req.session.username = 'Muhammad';
    }

    const data = {
        title: 'Index',
        username: username
    };

    res.render('index', data);
});

app.get('/contact', (req, res) => {
    const data = {
        title: 'Contact-45',
        ammount: 45
    };
    res.render('contact', data)
    
});

app.get('/contact-v2', (req, res) => {
    res.redirect('/contact');
});

app.post('/sendContactVals', (req, res) => {
    console.log(req.body);
    res.json({ message: 'POST request received successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
