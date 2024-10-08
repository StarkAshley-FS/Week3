'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Stars', 'galaxyId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Galaxies',
        key: 'id'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Stars', 'galaxyId', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  }
};