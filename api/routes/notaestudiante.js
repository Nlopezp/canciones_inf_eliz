const express=require('express');
const notaestudianteController=require('../controllers/NotaestController');
const router=express.Router();

router.get('/notaestudiantes',notaestudianteController.getNotaestudiantes);
router.post('/notaestudiante',notaestudianteController.newNotaestudiante);
router.get('/notaestudiante/:id',notaestudianteController.getNotaestudiante);
router.delete('/notaestudiante/:id',notaestudianteController.deleteNotaestudiante);
router.put('/notaestudiante/:id',notaestudianteController.updateNotaestudiante);

module.exports=router;
