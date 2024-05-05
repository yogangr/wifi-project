'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pelanggan.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kota: DataTypes.STRING,
    kodePos: DataTypes.INTEGER,
    email: DataTypes.STRING,
    telepon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pelanggan',
  });
  return pelanggan;
};