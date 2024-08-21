'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Star.belongsTo(models.Galaxy, { foreignKey: 'galaxyId' });
      models.Star.hasMany(models.Planet, { foreignKey: 'starId' });
      models.Star.belongsToMany(models.Planet, { through: 'StarsPlanets' });
    }
  }
  Star.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    galaxyId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Galaxies',
        key: 'id'
      },
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Star',
    timestamps: true
  });
  return Star;
};