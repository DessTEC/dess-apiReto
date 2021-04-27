'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      precio_menudeo: {
        type: Sequelize.DECIMAL
      },
      precio_mayoreo: {
        type: Sequelize.DECIMAL
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      fecha_prod: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      categoriaId: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: { model: 'Categoria', key: 'id' } 
      }, vendedorId: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: { model: 'Usuarios', key: 'id' } 
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Productos');
  }
};

