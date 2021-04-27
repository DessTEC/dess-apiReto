//importamos la clase 
const {Router} = require('express');

//leer controllers/index.js
const controllers = require('../controllers');

//crear objeto router a partir de clase Router
const router = Router();

//definir rutas
router.get('/', (req, res) => res.send('Welcome'))

//insertar nuevo usuario
router.post('/usuario', controllers.createUsuario);
//leer todos los usuarios
router.get('/usuario', controllers.getAllUsuarios);

//insertar nuevo usuario
router.post('/categoria', controllers.createCategoria);
//leer todos los usuarios
router.get('/categoria', controllers.getAllCategorias);

//insertar nuevo usuario
router.post('/producto', controllers.createProducto);
//leer todos los usuarios
router.get('/producto', controllers.getAllProductos);

module.exports = router;