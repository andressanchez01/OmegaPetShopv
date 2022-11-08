const { Router } = require('express');
var controllerEnvio=require('../controllers/controllerEnvio');
var controllerCliente=require('../controllers/controllerCliente');
var controllerOrdencompra=require('../controllers/controllerOrdencompra');
var controllerTransaccion=require('../controllers/controllerTransaccion');
var controllerPago=require('../controllers/controllerPago');
var controllerCategoria=require('../controllers/controllerCategoria');
var controllerProducto=require('../controllers/controllerProducto');
var controllerAsesor=require('../controllers/controllerAsesor');
var controllerLogin=require('../controllers/controllerLogin');
const router = Router();

//endpoints
//envios
router.post('/envio/crear',controllerEnvio.saveEnvio);
router.get('/envio/buscar/:id',controllerEnvio.buscarDataEnvio);
router.get('/envio/buscarall/:idb?',controllerEnvio.listarAllDataEnvio);
router.delete('/envio/delete/:id',controllerEnvio.deleteEnvio);
router.put('/envio/update/:id',controllerEnvio.updateEnvio);
//clientes
router.post('/cliente/crear',controllerCliente.saveCliente);
router.get('/cliente/buscar/:id',controllerCliente.buscarDataCliente);
router.get('/cliente/buscarall/:idb?',controllerCliente.listarAllDataCliente);
router.delete('/cliente/delete/:id',controllerCliente.deleteCliente);
router.put('/cliente/update/:id',controllerCliente.updateCliente);
//ordenes de compra
router.post('/ordencompra/crear',controllerOrdencompra.saveOrdencompra);
router.get('/ordencompra/buscar/:id',controllerOrdencompra.buscarDataOrdencompra);
router.get('/ordencompra/buscarall/:idb?',controllerOrdencompra.listarAllDataOrdencompra);
router.delete('/ordencompra/delete/:id',controllerOrdencompra.deleteOrdencompra);
router.put('/ordencompra/update/:id',controllerOrdencompra.updateOrdencompra);
//transacciones
router.post('/transaccion/crear',controllerTransaccion.saveTransaccion);
router.get('/transaccion/buscar/:id',controllerTransaccion.buscarDataTransaccion);
router.get('/transaccion/buscarall/:idb?',controllerTransaccion.listarAllDataTransaccion);
router.delete('/transaccion/delete/:id',controllerTransaccion.deleteTransaccion);
router.put('/transaccion/update/:id',controllerTransaccion.updateTransaccion);
//pagos
router.post('/pago/crear',controllerPago.savePago);
router.get('/pago/buscar/:id',controllerPago.buscarDataPago);
router.get('/pago/buscarall/:idb?',controllerPago.listarAllDataPago);
router.delete('/pago/delete/:id',controllerPago.deletePago);
router.put('/pago/update/:id',controllerPago.updatePago);
//categorias
router.post('/categoria/crear',controllerCategoria.saveCategoria);
router.get('/categoria/buscar/:id',controllerCategoria.buscarDataCategoria);
router.get('/categoria/buscarall/:idb?',controllerCategoria.listarAllDataCategoria);
router.delete('/categoria/delete/:id',controllerCategoria.deleteCategoria);
router.put('/categoria/update/:id',controllerCategoria.updateCategoria);
//productos
router.post('/producto/crear',controllerProducto.saveProducto);
router.get('/producto/buscar/:id',controllerProducto.buscarDataProducto);
router.get('/producto/buscarall/:idb?',controllerProducto.listarAllDataProducto);
router.delete('/producto/delete/:id',controllerProducto.deleteProducto);
router.put('/producto/update/:id',controllerProducto.updateProducto);
//asesores
router.post('/asesor/crear',controllerAsesor.saveAsesor);
router.get('/asesor/buscar/:id',controllerAsesor.buscarDataAsesor);
router.get('/asesor/buscarall/:idb?',controllerAsesor.listarAllDataAsesor);
router.delete('/asesor/delete/:id',controllerAsesor.deleteAsesor);
router.put('/asesor/update/:id',controllerAsesor.updateAsesor);
module.exports = router;
//login
router.post('/login/crear',controllerLogin.saveLogin);
router.get('/login/buscar/:id',controllerLogin.buscarDataLogin);
router.get('/login/buscarall/:idb?',controllerLogin.listarAllDataLogin);
router.delete('/login/delete/:id',controllerLogin.deleteLogin);
router.put('/login/update/:id',controllerLogin.updateLogin);


module.exports = router;