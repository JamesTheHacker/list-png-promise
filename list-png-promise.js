let fs = require('fs')

module.exports = function(path) {
  return new Promise(function(resolve, reject) {

    // Check the path is accessible
    fs.access(path, fs.F_OK, function(err) {
      if(err) return reject(err)

      // Get all files from path
      fs.readdir(path, function(err, files) {
        if(err) return reject(err)

        // Filter through files looking for PNG images
        let pngFiles = files.filter(function(file) {
          return file.indexOf('.png') > -1
        });

        resolve(pngFiles)
      })
    })
  })
}
