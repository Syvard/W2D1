const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: 'https://www.example.com/'
  };

  https.get(requestOptions.path, (res) => {
    console.log("Status code: " + res.statusCode)

    res.setEncoding('utf8');

    let responseBodyString = '';
    res.on('data', (chunk) => {
      responseBodyString += "/n" + chunk;
      console.log(responseBodyString)
    });
  });

};

getAndPrintHTMLChunks();