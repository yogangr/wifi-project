'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class riwayat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  riwayat.init({
    idPelanggan: DataTypes.INTEGER,
    tanggalPenggunaan: DataTypes.DATE,
    jumlahDataDigunakan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'riwayat',
  });
  return riwayat;
};