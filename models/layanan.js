'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class layanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  layanan.init({
    namaLayanan: DataTypes.STRING,
    kecepatanInternet: DataTypes.STRING,
    hargaBulanan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'layanan',
  });
  return layanan;
};