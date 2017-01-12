var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {

  init: function () {

    var s = config.dbSettings;
    var connection = mongoose.connect('mongodb://127.0.0.1:27017/test' + s.host + ':' + s.port + '/' + s.database, function (err) {
      if (err) {
        logger.error('Mongodb connection error: ' + err);
      }
    });

    //User
    var userSchema = require('./models/User');
    userSchema.index({"lastKnownPosition": "2dsphere"});
    global['User'] = mongoose.model('User', userSchema);

    //Match
    var matchSchema = require('./models/Match');
    global['Match'] = mongoose.model('Match', matchSchema);

    //Messae
    var messageSchema = require('./models/Message');
    global['Message'] = mongoose.model('Message', messageSchema);

    var chatSchema = require('./models/Chat');
    global['Chat'] = mongoose.model('Chat', chatSchema);

    var reportSchema = require('./models/Report');
    global['Report'] = mongoose.model('Report', reportSchema);
  }
}

