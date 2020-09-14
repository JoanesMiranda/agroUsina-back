'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('harvests', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mill_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'mills', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      start_date_harvest: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      finish_date_harvest: {
        type: Sequelize.DATEONLY,
        allowNull: false,
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

    await queryInterface.dropTable('harvests');
  }
};
