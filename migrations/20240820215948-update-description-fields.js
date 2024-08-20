'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Planets', 'type', 'description');
    await queryInterface.changeColumn('Planets', 'description', {
      type: Sequelize.TEXT,
      allowNull: true});

    await queryInterface.renameColumn('Stars', 'type', 'description');
    await queryInterface.changeColumn('Stars', 'description', {
      type: Sequelize.TEXT,
      allowNull: true});
  
    await queryInterface.renameColumn('Galaxies', 'type', 'description');
    await queryInterface.changeColumn('Galaxies', 'description', {
      type: Sequelize.TEXT,
      allowNull: true});  
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Planets', 'description', 'type');
    await queryInterface.changeColumn('Planets', 'type', {
      type: Sequelize.STRING,
      allowNull: true});

    await queryInterface.renameColumn('Stars', 'description', 'type');
    await queryInterface.changeColumn('Stars', 'type', {
      type: Sequelize.STRING,
      allowNull: true,});

    await queryInterface.renameColumn('Galaxies', 'description', 'type');
    await queryInterface.changeColumn('Galaxies', 'type', {
      type: Sequelize.STRING,
      allowNull: true,});
  }
};
