const express=require('express');
const cancionController=require('../controllers/CancionController');
const router=express.Router();

router.get('/canciones',cancionController.getCanciones);
router.post('/cancion',cancionController.newCancion);
router.get('/cancion/:id',cancionController.getCancion);
router.delete('/cancion/:id',cancionController.deleteCancion);
router.put('/cancion/:id',cancionController.updateCancion);

module.exports=router; 