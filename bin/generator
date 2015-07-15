var program = require('commander')
var path = require('path')
var fs = require('fs-extra-promise')


//var destPath = program.args.shift() || '.'
var tmplName = 'static'
var srcPath = path.join(__dirname, '..', 'templates', tmplName)
var destPath = path.join('.',tmplName)

fs.copyAsync(srcPath, destPath)
	.then(function(){
		console.log('copy template success')
	})

 
