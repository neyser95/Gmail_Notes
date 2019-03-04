const sequelize = require('./index');
const Sequelize = require('sequelize');
const noteController = {};

const note = sequelize.define('notes', {
  note: Sequelize.STRING,
  contact: Sequelize.STRING,
  userId: Sequelize.INTEGER
}, { timestamps: false });

noteController.createnote = (req, res, next) => {
  note.create({
    note: req.body.note,
    contact: req.body.contact,
    userId: Number(req.body.userId)
  }).then(response => {
    res.locals.note = response;
    next();
  }).catch(err => {
    res.send(err);
  });;
}

module.exports = noteController;