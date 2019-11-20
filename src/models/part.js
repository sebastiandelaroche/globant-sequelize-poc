'use strict';
module.exports = (sequelize, DataTypes) => {
  const Part = sequelize.define('parts', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    partId: {
      unique: true,
      type: DataTypes.STRING,
      field: 'part_id'
    },
    partType: {
      allowNull: false,
      type: DataTypes.UUID,
      field: 'part_type_id',
      references: {
        model: 'part_types',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    material: {
      type: DataTypes.TEXT
    },
    system: {
      type: DataTypes.STRING
    },
    customFields: {
      type: DataTypes.JSONB,
      field: 'custom_fields'
    }
  }, {});
  Part.associate = function (models) {
    Part.belongsToMany(models.PartSet, { through: 'part_part_sets', foreignKey: 'id' });
    Part.hasMany(models.versions);
    Part.hasOne(models.PartType);
  };
  return Part;
};