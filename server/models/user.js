const sequelize = require('./index');
const Sequelize = require('sequelize');
const userController = {};

const User = sequelize.define(
  'users',
  {
    userEmail: {
      type: Sequelize.STRING,
      unique: true
    }
  },
  { timestamps: false }
);

// * Creates a new user in the users table
userController.createUser = (req, res, next) => {
  console.log('This is the body', req.body);
  User.create({
    userEmail: req.body.userEmail
  })
    .then(response => {
      res.locals.user = response;
      next();
    })
    .catch(err => {
      console.log(err);
    });
};

// * Finds a specfic user in the users table
userController.findUser = (req, res, next) => {
  User.findOne({ where: { userEmail: req.body.userEmail } })
    .then(user => {
      res.locals.user = user;
      next();
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = userController;