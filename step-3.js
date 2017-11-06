const https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

 https.get(options, (res) => {
    console.log("Status code: " + res.statusCode)

    res.setEncoding('utf8');

    var responseBodyString = '';
    res.on('data', (chunk) => {
      responseBodyString += "/n" + chunk;
    });

    res.on('end', () => {
      console.log(responseBodyString)
      console.log("All done!")
    });
  });

};

getAndPrintHTML(requestOptions);