'use strict';
module.exports = (sequelize, DataTypes) => {
  const LoD = sequelize.define('lods', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      type: DataTypes.STRING
    },
    order: {
      type: DataTypes.INTEGER
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_default'
    }
  }, {});
  LoD.associate = function (models) {
    LoD.hasMany(models.versions);
  };
  return LoD;
};