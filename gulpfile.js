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

console.log(' __     __   ______   __       ______   ______   __    __   ______  ');  
console.log('/\ \  _ \ \ /\  ___\ /\ \     /\  ___\ /\  __ \ /\ "-./  \ /\  ___\ ');
console.log('\ \ \/ ".\ \\ \  __\ \ \ \____\ \ \____\ \ \/\ \\ \ \-./\ \\ \  __\  '); 
console.log(' \ \__/".~\_\\ \_____\\ \_____\\ \_____\\ \_____\\ \_\ \ \_\\ \_____\ ');
console.log(' \/_/   \/_/ \/_____/ \/_____/ \/_____/ \/_____/ \/_/  \/_/ \/_____/ ');
console.log(' ______  ______                                                       ');
console.log('/\__  _\/\  __ \                                                      ');
console.log('\/_/\ \/\ \ \/\ \                                                     ');
console.log('   \ \_\ \ \_____\                                                    ');
console.log('    \/_/  \/_____/                                                    ');
console.log(' ______   __  __   __       ______                                    ');
console.log('/\  ___\ /\ \/\ \ /\ \     /\  == \                                   ');
console.log('\ \ \__ \\ \ \_\ \\ \ \____\ \  _-/                                   ');
console.log(' \ \_____\\ \_____\\ \_____\\ \_\                                     ');
console.log('  \/_____/ \/_____/ \/_____/ \/_/                                     ');
                                                                      


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
    return gulp.src('javascript/*.ts')
    .pipe(ts())
    .pipe(gulp.dest('javascript'));
});