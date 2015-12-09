var rollup = require('rollup');

rollup.rollup({

  entry: 'main.js'

}).then(function (bundle) {

  bundle.write({
    format: 'es6',
    dest: 'bundle.js'
  });

});
