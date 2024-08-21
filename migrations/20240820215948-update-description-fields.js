'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Galaxies', 'description', {
      type: Sequelize.TEXT,
      allowNull: true
    });
    await queryInterface.changeColumn('Stars', 'description', {
      type: Sequelize.TEXT,
      allowNull: true
    });
    await queryInterface.changeColumn('Planets', 'description', {
      type: Sequelize.TEXT,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Galaxies', 'description', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Stars', 'description', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Planets', 'description', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
