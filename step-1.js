const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  https.get(requestOptions, (res) => {
    console.log("Status code: " + res.statusCode)

    res.setEncoding('utf8');

    var responseBodyString = '';
    res.on('data', (chunk) => {
      responseBodyString += "/n" + chunk;
      console.log(responseBodyString)
    });
  });

};

getAndPrintHTMLChunks();