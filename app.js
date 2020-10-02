const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('our first app is up and running 1337!');
});
