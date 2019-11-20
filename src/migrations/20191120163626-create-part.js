'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      partId: {
        unique: true,
        type: Sequelize.STRING,
        field: 'part_id'
      },
      partType: {
        allowNull: false,
        type: Sequelize.UUID,
        field: 'part_type_id',
        references: {
          model: 'part_types',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      material: {
        type: Sequelize.TEXT
      },
      system: {
        type: Sequelize.STRING
      },
      customFields: {
        type: Sequelize.JSONB,
        field: 'custom_fields'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parts');
  }
};