const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    min: 5
  },
  password: {
    type: String,
    required: true,
    min: 5
  }
});

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  })
});

UserSchema.methods.checkPassword = function(plainTextPW, callback) {
  return bcrypt.compare(plainTextPW, this.password, (err, match) => {
    return err ? callback(err) : callback(null, match);
  });
};

module.exports = mongoose.model('User', UserSchema);
