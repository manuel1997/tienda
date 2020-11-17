const { Router } = require('express');
const router = Router();

// RUTAS BANNERS

const {listBanner,insertBanner,verBanner,actualizarBanner,eliminarBanner} = require('../controllers/admin/banner'); 

router.get('/api/listBanner',listBanner);
router.post('/api/insertBanner',insertBanner);
router.get('/api/verBanner/:id',verBanner);
router.put('/api/actualizarBanner/:id',actualizarBanner)
router.delete('/api/eliminarBanner/:id',eliminarBanner);


// RUTAS PRODUCTO

const {listProduct,insertProduct,editProduct,actualizarProduct,deleteProduct} = require('../controllers/admin/productos'); 

router.get('/api/listProduct',listProduct);
router.post('/api/insertProduct',insertProduct);
router.get('/api/editProduct/:id',editProduct);
router.put('/api/actualizarProduct/:id',actualizarProduct);
router.delete('/api/deleteProduct/:id',deleteProduct);

// RUTAS CATEGORIAS

const {listarCategorias,insertCategoria,editCategoria,eliminarCategoria} = require('../controllers/admin/categorias')

router.get('/api/listarCategorias',listarCategorias);
router.post('/api/insertCategoria',insertCategoria);
router.put('/api/editCategoria/:id',editCategoria);
router.delete('/api/eliminarCategoria/:id',eliminarCategoria);


// RUTAS CATEGORIAS PRINCIPAL

const {obtCategoria1,editCatgPrincipal} = require('../controllers/admin/categoriaPrincipal')

router.get('/api/obtCategoria1',obtCategoria1);
router.put('/api/editCatgPrincipal/:id',editCatgPrincipal);



module.exports = router;