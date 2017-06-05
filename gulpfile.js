var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src("sass/main.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest("css/min"))
});

gulp.task('default', ['sass'], function(){
});
