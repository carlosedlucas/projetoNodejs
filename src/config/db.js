const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/supremos', {
  useNewUrlParser: true,
});

mongoose.set('useCreateIndex', true);

module.exports = mongoose.connection;
