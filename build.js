var rollup = require('rollup');
var npm = require('rollup-plugin-npm');
var commonjs = require('rollup-plugin-commonjs');

rollup.rollup({
  entry: 'main.js',
  plugins: [
    npm({ jsnext: true, main: true }),
    commonjs()
  ]
}).then(function (bundle) {
  bundle.write({
    format: 'cjs',
    dest: 'bundle.js'
  });
});