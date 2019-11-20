'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lods', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
      isDefault: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: 'is_default'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lods');
  }
};