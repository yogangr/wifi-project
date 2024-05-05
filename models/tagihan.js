'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tagihan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tagihan.init({
    idPelanggan: DataTypes.INTEGER,
    tanggalTagihan: DataTypes.DATE,
    jumlahTagihan: DataTypes.STRING,
    statusPembayaran: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tagihan',
  });
  return tagihan;
};