
const express=require('express');
const estudianteController=require('../controllers/EstudianteController');
const router=express.Router();

router.get('/estudiantes',estudianteController.getEstudiantes);
router.post('/estudiante',estudianteController.newEstudiante);
router.get('/estudiante/:id',estudianteController.getEstudiante);
router.put('/estudiante/:id',estudianteController.updateEstudiante);
router.delete('/estudiante/:id',estudianteController.deleteEstudiante);

module.exports=router;
