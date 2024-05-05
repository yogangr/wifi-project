'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelangganLayanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pelangganLayanan.init({
    idPelanggan: DataTypes.INTEGER,
    idLayanan: DataTypes.INTEGER,
    tanggalMulaiLayanan: DataTypes.DATE,
    tanggalSelesaiLayanan: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pelangganLayanan',
  });
  return pelangganLayanan;
};