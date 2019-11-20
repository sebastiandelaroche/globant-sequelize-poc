'use strict';
module.exports = (sequelize, DataTypes) => {
  const Version = sequelize.define('versions', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    versionNumber: {
      type: DataTypes.INTEGER,
      field: 'version_number'
    },
    fileUrn: {
      type: DataTypes.STRING,
      field: 'file_urn'
    },
    previewUrn: {
      type: DataTypes.STRING,
      field: 'preview_urn'
    },
    lodId: {
      allowNull: true,
      type: DataTypes.UUID,
      field: 'lod_id',
      references: {
        model: 'lods',
        key: 'id'
      }
    },
    partId: {
      allowNull: true,
      type: DataTypes.UUID,
      field: 'part_id',
      references: {
        model: 'parts',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at'
    }
  }, {});
  Version.associate = function (models) {
    Version.belongsTo(models.lods, { through: 'version_lods', foreignKey: 'id' });
    Version.belongsTo(models.parts, { through: 'version_parts', foreignKey: 'id' });
  };
  return Version;
};