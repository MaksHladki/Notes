var gulp = require('gulp'),
    connect = require('gulp-connect'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    htmlReplacer = require('gulp-html-replace');

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true,
        port: 9000
    });
});

gulp.task('css', function () {
    gulp.src('./src/contents/css/**/*.css')
    .pipe(concatCss("style.min.css"))
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./public/contents/css/'))
    .pipe(connect.reload());
});

gulp.task('minify-html', function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src('./src/templates/*.html')
      .pipe(minifyHTML(opts))
      .pipe(gulp.dest('./public/templates/'))
     .pipe(connect.reload());
});

gulp.task('js-ctrls', function () {
    gulp.src('./src/scripts/controllers/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts/controllers/'))
    .pipe(connect.reload());
});

gulp.task('js-libs', function () {
    gulp.src('./src/scripts/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts/js/'))
    .pipe(connect.reload());
});

gulp.task('js-services', function () {
    gulp.src('./src/scripts/services/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts/services/'))
    .pipe(connect.reload());
});

gulp.task('js-directives', function () {
    gulp.src('./src/scripts/directives/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts/directives/'))
    .pipe(connect.reload());
});

gulp.task('fonts', function () {
    gulp.src('./src/contents/fonts/**/*')
    .pipe(gulp.dest('./public/contents/fonts/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    gulp.src('./src/index.html')
    .pipe(htmlReplacer({
        'css': 'contents/css/style.min.css'
    }))
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload());
});

gulp.task('img', function () {
    gulp.src('./src/contents/img/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./public/contents/img/'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./src/index.html'], ['html']);
    gulp.watch(['./src/contents/css/**/*.css'], ['css']);
    gulp.watch(['./src/templates/*.html'], ['minify-html']);
    gulp.watch(['./src/contents/fonts/**/*'], ['js-fonts']);
    gulp.watch(['./src/scripts/controllers/*.js'], ['fonts']);
    gulp.watch(['./src/scripts/js/*.js'], ['js-libs']);
    gulp.watch(['./src/scripts/services/*.js'], ['js-services']);
    gulp.watch(['./src/scripts/directives/*.js'], ['js-directives']);
    gulp.watch(['./src/contents/img/*'], ['img']);
});

gulp.task('default', ['html', 'connect', 'watch', 'css', 'minify-html', 'fonts', 'img', 'js-ctrls', 'js-libs', 'js-services', 'js-directives']);