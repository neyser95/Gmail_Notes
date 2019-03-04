const models = {
  User: require('./user'),
  Note: require('./note'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = models;