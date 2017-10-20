// Requirements
// ==================================================================
var gulp = require('gulp');

// https://www.npmjs.com/package/gulp-sass
var sass = require('gulp-sass');

// https://www.npmjs.com/package/gulp-typescript
var ts = require('gulp-typescript');

// TODO
// gulp-plumber
// gulp notifications
// native gulp watch;
// live reload
// gulp debug -- outputs file names during tasks
// gulp size -- outputs file size '', works w gulp notify


// Default and basic tasks
// ==================================================================

gulp.task('default', function(){
    // TODO: automatically loop through all gulp.tasks and output them to the log when gulp is called by the user
    // TODO: Add more informative output here
    console.log('sup');
});
gulp.task('compile-sass', function(){
    return gulp.src('sass/*.scss')
    // TODO: sass error handling?
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('compile-ts', function(){
    return gulp.src('javascript/*.ts')
    // TODO: ts error handling?
    .pipe(ts())
    .pipe(gulp.dest('javascript'));
});


// OTHER TO DO
// ts lint
// convert a js to ts
// learn python the hard way

// rebuild our gulpfile
