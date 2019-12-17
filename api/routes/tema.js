const express=require('express');
const temaController=require('../controllers/TemaController');
const router=express.Router();

router.get('/temas',temaController.getTemas);
router.post('/tema',temaController.newTema);
router.get('/tema/:id',temaController.getTema);
router.delete('/tema/:id',temaController.deleteTema);
router.put('/tema/:id',temaController.updateTema);

module.exports=router;