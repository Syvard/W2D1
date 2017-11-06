const https = require('https');

function getAndPrintHTML () {

   var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (res) => {
    console.log("Status code: " + res.statusCode)

    res.setEncoding('utf8');

    var responseBodyString = '';
    res.on('data', (chunk) => {
      responseBodyString += "/n" + chunk;
     //console.log(responseBodyString)
    });

    res.on('end', () => {
      console.log(responseBodyString)
      console.log("All done!")
    });
  });

};

getAndPrintHTML();