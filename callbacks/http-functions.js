const https = require('https');

module.exports = function getHTML (options, callback) {

 https.get(options, (res) => {
    console.log("Status code: " + res.statusCode)

    res.setEncoding('utf8');

    var responseBodyString = '';
    res.on('data', (chunk) => {
      responseBodyString += "/n" + chunk;
    });

    res.on('end', () => {
      callback(responseBodyString);
      console.log("All done!")
    });
  });

};