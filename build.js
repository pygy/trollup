var rollup = require('rollup');
var npm = require('rollup-plugin-npm');
var commonjs = require('rollup-plugin-commonjs');

console.log("Yeah")

rollup.rollup({
  entry: 'main.js',
  plugins: [ npm({ jsnext: true, main: true }), commonjs() ]
}).then(function(bundle){
  console.log(bundle);
  bundle.write({
    format: 'cjs',
    dest: 'bundle.js'
  });
});