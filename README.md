list-png-promise
================

![](https://nodei.co/npm/list-png-promise.png?downloads=true&downloadRank=true&stars=true)

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
