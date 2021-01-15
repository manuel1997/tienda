const { Router } = require('express');
const router = Router();


// RUTA ADMIN_LOGIN

const {loginAdmin,verifyToken,verifyRole} = require('../controllers/admin/adminLogin');

router.post('/api/loginAdmin', loginAdmin);


// RUTAS BANNERS

const { listBanner, insertBanner, verBanner, actualizarBanner, eliminarBanner } = require('../controllers/admin/banner');

router.get('/api/listBanner',verifyRole, listBanner);
router.post('/api/insertBanner',verifyToken, insertBanner);
router.get('/api/verBanner/:id',verifyToken, verBanner);
router.put('/api/actualizarBanner/:id',verifyToken, actualizarBanner)
router.delete('/api/eliminarBanner/:id',verifyToken, eliminarBanner);


// RUTAS CATEGORIAS PRINCIPAL

const { obtCategoria1, editCatgPrincipal } = require('../controllers/admin/categoriaPrincipal')

router.get('/api/obtCategoria1',obtCategoria1);
router.put('/api/editCatgPrincipal/:id',verifyToken, editCatgPrincipal);


// RUTAS PRODUCTO

const { listProduct, insertProduct, editProduct, actualizarProduct, deleteProduct } = require('../controllers/admin/productos');

router.get('/api/listProduct/:page', listProduct);
router.post('/api/insertProduct',verifyToken, insertProduct);
router.get('/api/editProduct/:id',verifyToken, editProduct);
router.put('/api/actualizarProduct/:id',verifyToken, actualizarProduct);
router.delete('/api/deleteProduct/:id',verifyToken, deleteProduct);

// RUTAS CATEGORIAS

const { listarCategorias, insertCategoria, editCategoria, eliminarCategoria } = require('../controllers/admin/categorias')

router.get('/api/listarCategorias', listarCategorias);
router.post('/api/insertCategoria',verifyToken, insertCategoria);
router.put('/api/editCategoria/:id',verifyToken, editCategoria);
router.delete('/api/eliminarCategoria/:id',verifyToken, eliminarCategoria);

// RUTAS ADMINISTRADORES

const { listAdmin, insertAdmin, actualizarAdmin, eliminarAdmin } = require('../controllers/admin/admins')

router.get('/api/listAdmin', listAdmin);
router.post('/api/insertAdmin',verifyToken, insertAdmin);
router.put('/api/actualizarAdmin/:id',verifyToken, actualizarAdmin);
router.delete('/api/eliminarAdmin/:id',verifyToken, eliminarAdmin);

module.exports = router;