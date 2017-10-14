const helpers = {};

helpers.register = () =>
  (req, res, next) => {
    res.locals.cur_user = req.user;
    next();
  };

module.exports = helpers;
