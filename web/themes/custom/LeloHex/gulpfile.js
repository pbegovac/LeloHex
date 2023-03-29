const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const adjuster = require("gulp-css-url-adjuster");
const replace = require("gulp-replace");
const browserSync = require("browser-sync").create();

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
    .pipe(replace("./base/fonts.scss", "fonts.css"))
    .pipe(concat(dest))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
};

//components
//Home page

exports.compilePrimaryMenu = compileSass(
  "scss/components/primary_menu.scss",
  "primary_menu.css"
);

exports.compileContent = compileSass(
  "scss/components/content.scss",
  "content.css"
);

exports.compileContentBelow = compileSass(
  "scss/components/content_below.scss",
  "content_below.css"
);
exports.compileFooterTop = compileSass(
  "scss/components/footer_top.scss",
  "footer_top.css"
);

exports.compileFooterBottom = compileSass(
  "scss/components/footer_bottom.scss",
  "footer_bottom.css"
);

//product
exports.compileProduct = compileSass(
  "scss/components/productsFirst.scss",
  "productsFirst.css"
);

exports.compileCommerce = compileSass(
  "scss/components/productsCommerce.scss",
  "productsCommerce.css"
);

//bases
exports.compileFonts = compileSass("scss/base/fonts.scss", "fonts.css");

//critical
exports.compileCritical = compileSass(
  "scss/critical.scss",
  "default-critical.css"
);

// compile all
exports.compileAll = gulp.parallel(
  exports.compilePrimaryMenu,
  exports.compileContent,
  exports.compileContentBelow,
  exports.compileFooterTop,
  exports.compileFooterBottom,
  exports.compileFonts,
  exports.compileCritical,
  exports.compileProduct,
  exports.compileCommerce
);

// watch files and reload browser
exports.watch = () => {
  browserSync.init({
    proxy: "localhost:49156", // specify the correct directory here
    port: 3306, // specify the port you want to use
  });
  gulp.watch("scss/**/*.scss", exports.compileAll);
  gulp.watch("*.html").on("change", browserSync.reload);
};

exports.default = exports.watch;
