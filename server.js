var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.post('/addNewPhoto', function(req, res) {
  console.log(req)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


