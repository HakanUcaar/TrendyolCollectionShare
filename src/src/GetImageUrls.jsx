var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path;

function getImageUrls(url, callback) {
  var phantomArgs = [
    path.join(__dirname, 'lib', 'phantomjs-script.js'),
    url
  ];

  return new Promise(function(resolve, reject) {
    var phantom = childProcess.execFile(binPath, phantomArgs);
    var images = null;
    var error = null;

    phantom.stdout.on('data', function(data) {
      data = "" + data;
      if (data.indexOf('Error') === 0) {
        error = data;
      }
      else {
        try {
          images = JSON.parse(data);
        }
        catch(e) {
          console.log('Error', data)
          error = e;
          images = null;
        }
      }
    });

    phantom.stderr.on('data', function(data) {
      error = data;
    });

    phantom.on('close', function(code) {
      if (!images && !error) {
        error = new Error('no images found');
      }

      if (error) {
        reject(error);
        if (callback) callback(error, null);
      }
      else {
        resolve(images)
        if (callback) callback(null, images);
      }
    });
  })
}

module.exports = getImageUrls;