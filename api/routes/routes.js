const { authenticate } = require('../utils/middlewares');

const { getAllJokes, createUser, login } = require('../controllers');

module.exports = server => {
  server.get('/', (req, res) => res.send('server running'))
  server.get('/api/jokes', authenticate, getAllJokes);
  server.route('/api/users').post(createUser);
  server.route('/api/login').post(login);
};
