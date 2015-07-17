var path = require('path');
var gulp = require('gulp');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

//======================= CSS =======================
// 压缩normalize.css
gulp.task('normalize-css', function() {
	return src([
			'lib/normalizecss/normalize.css'
		])
		.pipe(rename("normalize.min.css"))
		.pipe(minifyCss())
		.pipe(dest('lib/normalizecss'));
});

// 压缩style.css
gulp.task('style-css', function() {
	return src([
			'css/style.css'
		])
		.pipe(rename("style.min.css"))
		.pipe(minifyCss())
		.pipe(dest('css'));
});

// 合并css
gulp.task('css', ['style-css'], function() {
	return src([
			'lib/normalizecss/normalize.min.css',
			'lib/mdl/material.min.css',
			'css/style.min.css'
		])
		.pipe(concat('style.all.min.css'))
		.pipe(dest('dist/css'));
});


//======================= FONT =======================
gulp.task('font', function() {

});

//======================= IMAGE =======================
gulp.task('img', function() {
	return src([
			'img/*.*'
		])
		.pipe(dest('dist/img'))
});


//======================= JS =======================
// 合并js库(只需执行一次)
gulp.task('lib-js', function() {
	return src([
			'lib/jquery/jquery-1.11.3.min.js',
			'lib/mdl/material.min.js'
		])
		.pipe(concat('lib.min.js'))
		.pipe(dest('dist/js'));
});

// 压缩index.js
gulp.task('index-js', function() {
	return src([
			'js/index.js'
		])
		.pipe(rename("index.min.js"))
		.pipe(uglify())
		.pipe(dest('js'));
});

// 合并各页面js
gulp.task('js', ['index-js'], function() {
	return src([
			'js/index.min.js'
		])
		.pipe(concat('script.min.js'))
		.pipe(dest('dist/js'));

});


// ======================= DEFAULT =======================
gulp.task('default', ['normalize-css', 'css', 'font', 'img', 'lib-js', 'js'], function() {
	//console.log('done');
});




// 切换src的工作目录
function src(globs, options) {
	options = options || {};
	options.cwd = path.join(__dirname, '.');
	return gulp.src(globs, options);
};

// 切换dest的工作目录
function dest(folder, options) {
	options = options || {};
	options.cwd = path.join(__dirname, '.');
	return gulp.dest(folder, options);
};