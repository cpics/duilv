
let gulp = require('gulp');
let connect = require('gulp-connect');


gulp.task('connect',function(){
	connect.server({
        root: './dist/',
        port:'8085'
	});
});