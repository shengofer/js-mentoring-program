var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var del = require('del');
paths = {
    src: {
        root: './src',
        html_index: './src/index.html',
        html_blocks: './src/assets/html/*.html',
        scss: './src/style/*.scss',
        js: './src/js/**',
        js_app: './src/js/main',
        img: './src/assets/img/**',
        bower: './bower_components/**',
        data: './src/assets/data/**',
        tpl : './src/templates/**',
        index: './src/index.html',
        vendor: './src/vendor'
    },
    dist: {
        root: './dist',
        css: './dist/css',
        js: './dist/js',
        img: './dist/img',
        vendor: './dist/vendor',
        data: './dist/data',
        tpl: './dist/templates',
        index: './dist/'
    }
};

gulp.task('styles', function() {
    return gulp.src(paths.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dist.css));
});



gulp.task('js', function () {
    return gulp.src(paths.src.js)
        //.pipe(amdOptimize(paths.src.js_app))
      //  .pipe(concat('bundle.js'))
        .pipe(gulp.dest(paths.dist.js));
});


gulp.task('tpl', function () {
    return gulp.src(paths.src.tpl)
        .pipe(gulp.dest(paths.dist.tpl));
});

gulp.task('index', function(){
    return gulp.src(paths.src.index)
        .pipe(gulp.dest(paths.dist.index));
});

gulp.task('clean', function (cb) {
    del.sync(paths.dist.root, cb);
});
gulp.task('bower', function() {
    gulp.src(paths.src.bower)
        .pipe(gulp.dest(paths.dist.vendor));
});

gulp.task('src_bower', function() {
    gulp.src(paths.src.bower)
        .pipe(gulp.dest(paths.src.vendor));
});

gulp.task('src_styles', function() {
    return gulp.src(paths.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});
gulp.task('dist', ['clean', 'index', 'tpl','bower', 'js', 'styles']);

gulp.task('src',['src_bower','src_styles']);
gulp.task('default',['dist']);

