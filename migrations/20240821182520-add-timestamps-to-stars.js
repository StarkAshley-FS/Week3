'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Stars', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('Stars', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Stars', 'createdAt');
    await queryInterface.removeColumn('Stars', 'updatedAt');
  }
};