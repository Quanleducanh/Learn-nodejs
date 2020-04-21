/* 
console.log('Hello world');

const a = 1;	//Never change value of variable

let b = 2;	//Change value

//Trick: Alway use const for variable 

const c = a + b;
console.log('Result: ', c);

console.log(`Result should be: ${c}`);
*/

/*
const http = require('http');
//create a server object:
http
  .createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
console.log('Server Started!');
*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
