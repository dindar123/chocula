(function () {
  process.title = 'chernika';

  global["config"] = require('./config.local');
  global['logger'] = require('./utils/logger').create();

  var model = require('./api/model');
  var api = require('./api/api');

  model.init();
  api.init();
})();
