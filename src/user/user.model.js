var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  login: {
    type: String,
    minlength: 5,
    maxlength: 20,
    unique: [true, 'This login already exists!'],
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: function (email) {
        return new RegExp(
          '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$'
        ).test(email);
      },
    },
    unique: [true, 'This email already exist'],
    required: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
