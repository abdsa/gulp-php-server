// Identifying variable
var gulp				= require('gulp'),
		browserSync	= require('browser-sync'),
		php					= require('gulp-connect-php');


// simple running php with browser-sync
gulp.task('connect-php', function(){
	php.server({}, function(){
		browserSync({
				proxy: "127.0.0.1:8000"
			});
	});
});