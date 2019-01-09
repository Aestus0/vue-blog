const userApi = require('./api/userApi');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', userApi);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
  .on('error', function (err) {
  console.log('on error handler');
  console.log(err);
});


