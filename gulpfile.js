// Requirements
var gulp = require('gulp');

// https://www.npmjs.com/package/gulp-sass
var sass = require('gulp-sass');

// Default and basic tasks
gulp.task('default', function(){
    // Give something more informative for default task - list of commands, help, etc?
    console.log('Welcome to Gulp. Available commands: test, hey');
});

gulp.task('test', function(){
    console.log('Gulp is working');
});

gulp.task('compile-sass', function(){
    console.log('yo dawg');
    // compile my stuff
});