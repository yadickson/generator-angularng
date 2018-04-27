// generated on <%= date %> using <%= name %> <%= version %>

const gulp = require('gulp');

let addpaths = [
  'node_modules/angular/angular.js',
  'node_modules/angular-animate/angular-animate.js',
  'node_modules/angular-route/angular-route.js',
  'node_modules/bootstrap/**/bootstrap.js'
];

let addtestpaths = [
  'node_modules/angular-mocks/angular-mocks.js'
];

let excludepaths = [
  'node_modules/angular/index.js',
  'node_modules/angular-animate/index.js',
  'node_modules/angular-route/index.js'
];

let addcss = [
];

let addscss = [
  'node_modules/bootstrap-sass/assets/stylesheets/**/*.scss'
];

let addfonts = [

];

let orderBy = [
  '**/jquery.js',
  '**/angular.js',
  '**/angular-*.js',
  '**/bootstrap.js',
  '**/bootstrap-*.js',
  '*'
];

options = {
  addpaths: addpaths,
  addtestpaths: addtestpaths,
  excludepaths: excludepaths,
  addcss: addcss,
  addscss: addscss,
  addfonts: addfonts,
  orderBy: orderBy
};

const ajsweb = require("gulp-ajsweb")(gulp, options);

gulp.task('default', ['build'], () => {});
