// import * as Caesar from "caesar-salad";

const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 3051;

const password = 'paswwwwword';
const depassword = 'eakoscig';

app.get('/encode/password', (req, res)=> {
    console.log(Vigenere.Cipher('password').crypt(password));
    res.send('Crypted password ' + Vigenere.Cipher('password').crypt(password));

});

app.get('/decode/eakoscig', (req, res)=> {
    res.send('Crypted password ' + Vigenere.Decipher('password').crypt(depassword));

});

app.get('/', (req, res)=> {
    res.send('Hello! ');

});

app.listen(port, () => {
    console.log('Were live on http:localhost:' + port)
});