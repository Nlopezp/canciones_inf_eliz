const express=require('express');
const autorController=require('../controllers/AutorController');
const router=express.Router();

router.get('/autores',autorController.getAutores);
router.post('/autor',autorController.newAutor);
router.get('/autor/:id',autorController.getAutor);
router.delete('/autor/:id',autorController.deleteAutor);
router.put('/autor/:id',autorController.updateAutor);

module.exports=router;

//  Una empresa puede gastar cientos de miles de dólares en firewalls, 
// sistemas de detección de intrusos y el cifrado y otras tecnologías de seguridad,
//  pero si un atacante puede llamar a una persona de confianza dentro de la empresa,
//   y esa persona cumple, y si el atacante entra, entonces 
// todo lo que el dinero gastado en la tecnología es esencialmente desperdiciada.
//  ----Kevin Mitnick 