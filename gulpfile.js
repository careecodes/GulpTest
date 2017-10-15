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