const { Model } = require('sequelize');
const errors = require('../errors');

module.exports = (sequelize, DataTypes) => {
  class ApiKey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ApiKey.init(
    {
      email: DataTypes.STRING,
      key: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'ApiKey',
    }
  );

  ApiKey.listAll = () =>
    ApiKey.findAll({ attributes: ['email', 'key', 'active'] }).catch((err) => {
      throw errors.defaultDatabase(err);
    });

  ApiKey.new = (newKey) => {
    return ApiKey.create(newKey).catch((err) => {
      throw errors.defaultDatabase(err);
    });
  };

  ApiKey.disable = (email, key) =>
    ApiKey.update({ active: false },
      { where: { email, key } })
      .catch((err) => {
        throw errors.defaultDatabase(err);
      });

  return ApiKey;
};
