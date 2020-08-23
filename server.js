const express = require('express');

const app = express();

const ejs = require('ejs');

const path = require('path');

const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 3300;

app.use(express.static('public'));



//  set template engine
app.use(expressLayout);

app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('/cart', (req, res) => {
    res.render('customers/cart');
});

app.get('/login', (req, res) => {
    res.render('admin/login');
});

app.get('/register', (req, res) => {
    res.render('admin/register');
});

app.listen(PORT, () => {
    console.log(`We are listening to port ${PORT}`);
});

