/* jshint esversion: 6*/

var express = require('express');
var compression = require('compression');
var app = express();
var history = require('connect-history-api-fallback');
const PORT = process.env.PORT || 9001;

app.use(compression({filter: shouldCompress}));

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
}

app.get('/blog/blog.html', (req, res) => {
    // this was the route used for my first blog post on promises prior to rebuilding the site in vue
    res.status(301).redirect('/blog/promises');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/vue/dist/index.html');
});
app.use(express.static(__dirname + '/vue/dist'));
app.use(history());



app.listen(PORT);
