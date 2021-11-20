const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, actualizarEvento, eliminarEvento, crearEvento } = require('../controllers/events');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();;

router.use( validarJWT );

router.get('/', getEventos);

router.post( 
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatorio').isDate(),
        check('end', 'La fecha de finalización es obligatorio').isDate(),
        validarCampos
    ], 
    crearEvento );

router.put( 
        '/:id',
        [
            check('title', 'El titulo es obligatorio').not().isEmpty(),
            check('start', 'La fecha de inicio es obligatorio').isDate(),
            check('end', 'La fecha de finalización es obligatorio').isDate(),
            validarCampos   
        ], 
        actualizarEvento );

router.delete( '/:id', eliminarEvento );

module.exports = router;