const db = require('../db');

exports.getAll = (req, res, next) => {
    // const encoded = req.headers.authorization,
    //   limit = req.query.limit || LIMIT_DEFAULT,
    //   page = req.query.page || PAGE_DEFAULT;
    // if (!encoded || !sessionManager.verify(encoded)) return next(errors.invalidAuth());
    return db.User
      .findAll()
      .then(users => {
        res.status(200).send(JSON.stringify(users));
      })
      .catch(err => {
        console.info('DB Error');
        res.status(500).send(JSON.stringify(users));
      });
  };