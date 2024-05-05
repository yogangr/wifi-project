'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pelangganLayanans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPelanggan: {
        type: Sequelize.INTEGER
      },
      idLayanan: {
        type: Sequelize.INTEGER
      },
      tanggalMulaiLayanan: {
        type: Sequelize.DATE
      },
      tanggalSelesaiLayanan: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pelangganLayanans');
  }
};