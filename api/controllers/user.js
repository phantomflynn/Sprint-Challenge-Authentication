const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({ error: 'error saving new user' }))
};

module.exports = {
  createUser
};
