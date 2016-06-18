list-png
========

List all PNG image files in a given directory

Install
-------

    npm install list-png --save

Usage
-----

    let listpng = require('list-png')

    listpng('/home/james/photos')
    .then(function(files) {
        console.log(files)
    })
