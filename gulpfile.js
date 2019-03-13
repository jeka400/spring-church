'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');

//compile
gulp.task('sass', () => {
    gulp.src('styles/scss-styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Task to minify css using package cleanCSs
gulp.task('minify-css', () => {
    // Folder with files to minify
    return gulp.src('dist/css/*.css')
    //The method pipe() allow you to chain multiple tasks together 
    //I execute the task to minify the files
   .pipe(cleanCSS())
   //I define the destination of the minified files with the method dest
   .pipe(gulp.dest('dist/cssMin'));
});

gulp.task('sass:watch', () => {
    gulp.watch('styles/scss-style/style.scss', (event) => {
        gulp.run('sass');
    });
})

gulp.task( 'default', [ 'sass' ] )