// Requirements
// ==================================================================
var gulp = require('gulp');

// https://www.npmjs.com/package/gulp-sass
var sass = require('gulp-sass');

// https://www.npmjs.com/package/gulp-typescript
var ts = require('gulp-typescript');



// Default and basic tasks
// ==================================================================

gulp.task('default', function(){
    // TODO: automatically loop through all gulp.tasks and output them to the log when gulp is called by the user
    console.log('Welcome to Gulp. Available commands: ... ');
});

gulp.task('test', function(){
    console.log('Gulp is working');
});

gulp.task('compile-sass', function(){
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('compile-ts', function(){
    console.log('sup');
});