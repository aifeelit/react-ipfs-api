const users = require('./controllers/users');
const auth = require('./middlewares/auth');

exports.init = app => {
    app.get('/users', users.getAll);
    //app.post('/keys/create', [auth.checkAuth], foo.bar());
};
