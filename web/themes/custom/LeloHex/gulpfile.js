const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");

function compileHeader() {
  return gulp
    .src("scss/components/header.scss")
    .pipe(sass())
    .pipe(concat("header.css"))
    .pipe(gulp.dest("dist/css"));
}

function compileBody() {
  return gulp
    .src("scss/components/body.scss")
    .pipe(sass())
    .pipe(concat("body.css"))
    .pipe(gulp.dest("dist/css"));
}

exports.compileHeader = gulp.series(compileHeader);
exports.compileBody = gulp.series(compileBody);
