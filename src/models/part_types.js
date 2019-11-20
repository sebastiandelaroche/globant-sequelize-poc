'use strict';
module.exports = (sequelize, DataTypes) => {
  const PartType = sequelize.define('PartType', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {});
  PartType.associate = function (models) {
    // associations can be defined here
  };
  return PartType;
};