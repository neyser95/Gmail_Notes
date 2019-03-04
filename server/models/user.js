const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    userEmail: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  User.associate = models => {
    User.hasMany(models.Message);
  };

  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { email: login },
    });

    return user;
  };

  return User;
};

export default user;
