//leer todos los modelos creados (users, ..posts, products)
const models = require("../database/models");

//crear operación POST para un usuario nuevo
const createUsuario = async (req, res) => {
	try{
        //genera una sentencia SQL tipo insert into
        const usuario = await models.Usuario.create(req.body);
        //código 201 = insertado correctamente
	    return res.status(201).json({usuario});
	}catch(error){
        //código 500 = error del lado del server
	    return res.status(500).json({error: error.message});
	}
};

//metodo GET (todos) para usuarios
const getAllUsuarios = async (req, res) => {
    console.log('getting users');
	try{
	    const usuarios = await models.Usuario.findAll({
		    include: [
		    ]
        });
        //código 200 = ejecutado con éxito
	    return res.status(200).json({usuarios});
	}catch(error){
	    return res.status(500).json({error: error.message});
	}
};


//crear operación POST para una categoría nueva
const createCategoria = async (req, res) => {
	try{
        //genera una sentencia SQL tipo insert into
        const categoria = await models.Categoria.create(req.body);
        //código 201 = insertado correctamente
	    return res.status(201).json({categoria});
	}catch(error){
        //código 500 = error del lado del server
	    return res.status(500).json({error: error.message});
	}
};

//metodo GET (todos) para categorías
const getAllCategorias = async (req, res) => {
    console.log('getting categoria');
	try{
	    const categorias = await models.Categoria.findAll({
		    include: [
		    ]
        });
        //código 200 = ejecutado con éxito
	    return res.status(200).json({categorias});
	}catch(error){
	    return res.status(500).json({error: error.message});
	}
};

//crear operación POST para un producto nuevo
const createProducto = async (req, res) => {
	try{
        //genera una sentencia SQL tipo insert into
        const producto = await models.Producto.create(req.body);
        //código 201 = insertado correctamente
	    return res.status(201).json({producto});
	}catch(error){
        //código 500 = error del lado del server
	    return res.status(500).json({error: error.message});
	}
};

//metodo GET (todos) para categorías
const getAllProductos = async (req, res) => {
    console.log('getting productos');
	try{
	    const productos = await models.Producto.findAll({
		    include: [
		    ]
        });
        //código 200 = ejecutado con éxito
	    return res.status(200).json({productos});
	}catch(error){
	    return res.status(500).json({error: error.message});
	}
};

module.exports = {
    createUsuario,
	getAllUsuarios,
	createCategoria,
	getAllCategorias,
	createProducto,
	getAllProductos

};