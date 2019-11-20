'use strict';
module.exports = (sequelize, DataTypes) => {
  const PartSet = sequelize.define('PartSet', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {});
  PartSet.associate = function (models) {
    PartSet.belongsToMany(models.parts, { through: 'part_set_parts', foreignKey: 'id' });
  };
  return PartSet;
};