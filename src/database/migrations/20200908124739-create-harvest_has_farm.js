'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('harvest_has_farm', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      farm_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'farms', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      harvest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'harvests', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('harvest_has_farm');

  }
};

