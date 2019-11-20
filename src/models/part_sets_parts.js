'use strict';
module.exports = (sequelize, DataTypes) => {
  const part_sets_parts = sequelize.define('part_sets_parts', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    partSetId: DataTypes.UUID,
    partId: DataTypes.UUID
  }, {});
  part_sets_parts.associate = function (models) {
    part_sets_parts.belongsTo(models.parts, { through: 'part_sets_parts', foreignKey: 'id' });
    part_sets_parts.belongsTo(models.PartSet, { through: 'part_sets_part_sets', foreignKey: 'id' });
  };
  return part_sets_parts;
};