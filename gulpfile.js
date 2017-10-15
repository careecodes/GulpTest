// ==========================================================================
// Caree's First Gulp File 😎
// ==========================================================================

// REQUIREMENTS
var gulp = require('gulp');

// I wonder what happens if your gulp file requires something that the machine does not have installed.
var sass = require('gulp-sass');

gulp.task('default', function(){
    console.log('Welcome to Gulp. Available commands: test, hey');
});

gulp.task('test', function(){
    console.log('Gulp is working');
});

