// ==========================================================================
// Welcome to Caree's messy, experimental dive into writing Gulp files. 
// This is a work progress. Watch where you step.
// ==========================================================================


// Gotta require gulp if you wanna gulp
var gulp = require('gulp');

// Default task so that the 'gulp' command actually does something.
gulp.task('default', function(){
    console.log('Welcome to Gulp. Available commands: test, hey');
});

gulp.task('test', function(){
    console.log('Gulp is working');
});

gulp.task('hey', function(){
    console.log('ayy');
});