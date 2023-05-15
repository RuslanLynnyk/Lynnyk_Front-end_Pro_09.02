const gulp = require('gulp');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');


function css() {
    return gulp.src('./styles/*.css') 
        .pipe(concat('style.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('./dist/css/'));
}

function js()  {
    return gulp.src('./js/*.js') 
        .pipe(concat('main.min.js')) 
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
}

function watch() {
    gulp.watch('./css/*.css', css); 
    gulp.watch('./js/*.js', js); 
};


gulp.task('default', gulp.series(css, js, watch));

