const Sequelize = require('sequelize');

const url =
  process.env.DATABASE_URL ||
  'postgres://qsdcsoaayeyoyy:759f9d1a0c29041b9af03b3b8badfa49c9c563f41108fb48aab2339aa11ff294@ec2-54-163-234-88.compute-1.amazonaws.com:5432/dfv9v1nd4k6g0u';

sequelize = new Sequelize(url, {
  logging: false,
  dialectOptions: {
    ssl: true /* for SSL config since Heroku gives you this out of the box */
  }
});

module.exports = sequelize;
