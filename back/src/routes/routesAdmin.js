const { Router } = require('express');
const router = Router();

// RUTAS BANNERS

const {listBanner,insertBanner,actualizarBanner,eliminarBanner} = require('../controllers/admin/banner'); 

router.get('/api/listBanner',listBanner);
router.post('/api/insertBanner',insertBanner);
router.put('/api/actualizarBanner',actualizarBanner)
router.delete('/api/eliminarBanner/:id',eliminarBanner);


// RUTAS PRODUCTO

const {listProduct,insertProduct,editProduct,actualizarProduct,deleteProduct} = require('../controllers/admin/productos'); 

router.get('/api/list',listProduct);
router.post('/api/insertProduct',insertProduct);
router.get('/api/editProduct/:id',editProduct);
router.put('/api/actualizarProduct/:id',actualizarProduct);
router.delete('/api/deleteProduct/:id',deleteProduct);

// RUTAS CATEGORIAS

const {listarCategorias,insertCategoria,editCategoria,eliminarCategoria} = require('../controllers/admin/categorias')

router.get('/api/listarCategorias',listarCategorias)
router.post('/api/insertCategoria',insertCategoria);
router.put('/api/editCategoria/:id',editCategoria);
router.delete('/api/eliminarCategoria/:id',eliminarCategoria)


module.exports = router;