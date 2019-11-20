'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('part_sets_parts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      partSetId: {
        type: Sequelize.UUID,
        field: 'part_set_id',
        allowNull: false,
        references: {
          model: 'part_sets',
          key: 'id'
        }
      },
      partId: {
        type: Sequelize.UUID,
        field: 'part_id',
        allowNull: false,
        references: {
          model: 'parts',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('part_sets_parts');
  }
};