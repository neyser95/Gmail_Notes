const note = (sequelize, DataTypes) => {
  const Note = sequelize.define('note', {
    text: DataTypes.STRING,
  });

  Note.associate = notes => {
    Note.belongsTo(notes.User);
  };

  return Note;
};

module.exports = note;