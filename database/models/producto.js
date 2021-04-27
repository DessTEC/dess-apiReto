'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Producto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio_menudeo: DataTypes.DECIMAL,
    precio_mayoreo: DataTypes.DECIMAL,
    cantidad: DataTypes.INTEGER,
    fecha_prod: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};