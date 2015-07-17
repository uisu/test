#!/usr/bin/env node

var program = require('commander')
var path = require('path')
var fs = require('fs-extra-promise')
var pkg = require('../package.json')

// 命令行参数
program.version(pkg.version)
			 .option('-t, --template <static | nodejs>', 'web site template, default to static', 'static')
		   .parse(process.argv);

// 检查模板名称
var tmplName = program.template;
if('static' !== tmplName && 'nodejs' !== tmplName){
	console.error('no such template: ' + tmplName);
	process.exit(1);
}

// 文件路径
var srcPath = path.join(__dirname, '..', 'templates', tmplName)
var destPath = path.join('.',tmplName)

// 复制模板文件夹到当前路径
fs.copyAsync(srcPath, destPath)
	.then(function(){
		console.log('copy template success')
	})

 
