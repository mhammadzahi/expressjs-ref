const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');// json response
const myScript = require('./scripts/myScript');


const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// optional if using default 'views' directory
app.set('views', './templates');

// image, css, js, etc. static files
app.use(express.static('static'));

app.use(bodyParser.json());

// express-session middleware
app.use(session({
    secret: 'yEdw5dwR9ey8W9T',
    resave: false,
    saveUninitialized: true,
}));


app.get('/', (req, res) => {

    myScript.sayHello();
    myScript.sayHi();

    let username = req.session.username || 'Muhammad-1';

    if(!req.session.username){
        req.session.username = 'Muhammad-2';
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
    res.render('contact', data);
});


app.get('/contact-v2', (req, res) => {
    res.redirect('/contact');
});


app.post('/send-contacts', (req, res) => {
    console.log(req.body);
    resp = {
        message0: 'msg0',
        message: 'msg'
    };
    res.json(resp);
});

app.get('/user/:id', (req, res) => {
    
    const data = {
        userId: req.params.id
    }
    res.render('userId', data);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
