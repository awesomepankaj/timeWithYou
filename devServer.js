var path = require('path');
var express = require('express');
var webpack = require('webpack');
var bodyParser = require('body-parser')
var webpackConfig = require('./webpack.config.dev');
var cloudinary = require('cloudinary')
var config = require('./config')
var fs = require('fs')


var app = express();
var compiler = webpack(webpackConfig);

cloudinary.config(config.cloudinaryInfo);

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('/getPhotos', function(req, res) {

  fs.readFile('./photoInfo.json', 'utf8', (err, data) => {
    if (err) throw err;

    var jsonData = JSON.parse(data)

    res.json(jsonData)
  }); 
})

app.post('/addNew', function(req, res) {
  
  fs.readFile('./photoInfo.json', 'utf8', (err, data) => {
    if (err) throw err;

    var jsonData = JSON.parse(data)

    jsonData.photosContent.push(req.body.newPhotoInfo) 

    fs.writeFile('./photoInfo.json', JSON.stringify(jsonData), function(err) {
      if (err) throw err
      console.log('Created')
    })
  }); 

})

app.post('/addNewPhoto', function(req, res) {
  
  cloudinary.uploader.upload(req.body.imagePreviewUrl, function(result) { 

    res.json({url: result})
  });

})


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

//app.use(bodyParser.urlencoded({ extended: false }))
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:4000');
});
