'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('versions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      versionNumber: {
        type: Sequelize.INTEGER,
        field: 'version_number'
      },
      fileUrn: {
        type: Sequelize.STRING,
        field: 'file_urn'
      },
      previewUrn: {
        type: Sequelize.STRING,
        field: 'preview_urn'
      },
      lod: {
        allowNull: true,
        type: Sequelize.UUID,
        field: 'lod_id',
        references: {
          model: 'lods',
          key: 'id'
        }
      },
      part: {
        allowNull: true,
        type: Sequelize.UUID,
        field: 'part_id',
        references: {
          model: 'parts',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('versions');
  }
};