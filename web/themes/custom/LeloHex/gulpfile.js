const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");

const compileSass = (src, dest) => () => {
  return gulp
    .src(src)
    .pipe(sass())
    .pipe(concat(dest))
    .pipe(gulp.dest("dist/css"));
};

exports.compileHeader = compileSass(
  "scss/components/header.scss",
  "header.css"
);
exports.compileContent = compileSass(
  "scss/components/content.scss",
  "content.css"
);
