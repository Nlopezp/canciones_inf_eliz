const express=require('express');
const autorRouter=require('./autor');
const cancionRouter=require('./cancion');
const estudianteRouter=require('./estudiante');
const materiaRouter=require('./materia');
const notaestudianteRouter=require('./notaestudiante');
const temaRouter=require('./tema');


const router=express.Router();

router.use(autorRouter);
router.use(cancionRouter);
router.use(estudianteRouter);
router.use(materiaRouter);
router.use(notaestudianteRouter);
router.use(temaRouter);



module.exports=router;