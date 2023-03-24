const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const adjuster = require("gulp-css-url-adjuster");
const replace = require("gulp-replace");

const compileSass = (src, dest) => () => {
  return gulp
    .src(src)
    .pipe(sass())
    .pipe(
      adjuster({
        prepend: "../fonts/",
        replace: ["../../fonts/", "../fonts/"],
      })
    )
    .pipe(replace("../base/fonts.scss", "fonts.css"))
    .pipe(concat(dest))
    .pipe(gulp.dest("./dist/css"));
};

exports.compileMixins = compileSass("scss/base/mixins.scss", "mixins.css");

exports.compileHeader = compileSass(
  "scss/components/header.scss",
  "header.css"
);
exports.compileFooterBottom = compileSass(
  "scss/components/footer_bottom.scss",
  "footer_bottom.css"
);

exports.compileContent = compileSass(
  "scss/components/content.scss",
  "content.css"
);
exports.compileFonts = compileSass("scss/base/fonts.scss", "fonts.css");
