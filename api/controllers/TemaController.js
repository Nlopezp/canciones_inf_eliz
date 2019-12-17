const Tema=require('../models/tema');

let getTemas=(req,res)=>{
    Tema.find()
      .populate('materia')
      .exec((err,temas)=>{
        if(err){
            res.status(500).send({
                message:`Error en el server ${err}`
            })
        }
        if(!temas){
            res.status(404).send({
                message:'No existen temas'
            })
        }
        res.status(200).send({
            temas
        })
      })
};
let getTema=(req,res)=>{
    let {id}=req.params;
    Tema.findById(id, (err, tema) => {
        if (err) {
            res.status(500).json({
                menssage: `Error al mostrar el tema ${err}`
            })
        }
        if (!tema) {
            res.status(404)
                .json({ menssage: 'No existe el tema' })
        }
        res.status(200).send({
            tema
        })
    })
};
let newTema=(req,res)=>{
    let tema=new Tema({
        nombre_tema: req.body.nombre_tema,
        duracion:req.body.duracion,
        materia:req.body.materia
    })
    tema.save((err, tema) => {
        if (err) {
            res.status(500).send({
                message:`Error al guardar el tema ${err}`
            })
        } else {
            res.status(200)
                .json({
                    tema
                })
        }
    })
};

let deleteTema=(req,res)=>{
    let {id}=req.params;
    Tema.findById(id,(err,tema)=>{
        if(err){
            res.status(500).json({
                message:`Error al realizar la petición ${err}`
            })
        }
       Tema.deleteOne(err=>{
           if(err){
               res.status(500).json({
                   message:`Error al eliminar el tema ${err}`
               })
           }else{
               res.status(200).json({
                   message:'El tema ha sido eliminado con exito'
               })
           }
       })
    })
};

let updateTema=(req,res)=>{
    let {id}=req.params;
    let update=req.body;
    Tema.findByIdAndUpdate(id,update,{new:true},(err,temaUpdated)=>{
        if(err){
            res.status(500).json({
                ok:false,
                message:`Error al actualizar el tema ${err}`
            })
        }
        res.status(200).json({
            tema:temaUpdated
        })
    })
}

module.exports={
    getTemas,
    getTema,
    newTema,
    deleteTema,
    updateTema
}