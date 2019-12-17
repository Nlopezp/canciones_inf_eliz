const Materia=require('../models/materia');

let getMaterias=(req,res)=>{
    Materia.find()
      .populate('estudiante')
       .exec((err,materias)=>{
           if(err){
               res.status(500).send({
                   message:`Error en el server ${err}`
               })
           }
           if(!materias){
               res.status(404).send({
                   message:'No existen materias'
               })
           }
           res.status(200).send({
               materias
           })
       })
};
let getMateria=(req,res)=>{
    let {id}=req.params;
    Materia.findById(id, (err, materia) => {
        if (err) {
            res.status(500).json({
                menssage: `Error al mostrar la materia ${err}`
            })
        }
        if (!materia) {
            res.status(404)
                .json({ menssage: 'No existe la materia' })
        }
        res.status(200)
            .json({
                materia
            })
    })
};
let newMateria=(req,res)=>{
    let materia=new Materia({
        nombre: req.body.nombre,
        creditos: req.body.creditos,
        estudiante:req.body.estudiante
    })
    materia.save((err, materia) => {
        if (err) {
            res.status(500)
                .json({
                    message: `Error al guardar la materia ${err}`
                })
        } else {
            res.status(200)
                .json({
                    materia
                })
        }
    })
};

let deleteMateria=(req,res)=>{
    let {id}=req.params;
    Materia.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).json({
                message:`Error al realizar la petición ${err}`
            })
        }else{
            res.status(200).json({
                message:'La materia se ha eliminado con exito'
            })
        }
        // Este metodo de eliminar me genera problemas
    //  Materia.deleteOne(err=>{
    //        if(err){
    //            res.status(500).json({
    //                message:`Error al eliminar la materia ${err}`
    //            })
    //        }else{
    //            res.status(200).json({
    //                message:'La materia ha sido elimnada con exito'
    //            })
    //        }
    //    })
    })
};

let updateMateria=(req,res)=>{
    let {id}=req.params;
    let update=req.body;
    Materia.findByIdAndUpdate(id,update,{new:true},(err,materiaUpdated)=>{
        if(err){
            res.status(500).json({
                ok:false,
                message:`Error al actualizar la materia ${err}`
            })
        }
        res.status(200).json({
            materia:materiaUpdated
        })
    })
}

module.exports={
    getMaterias,
    getMateria,
    newMateria,
    deleteMateria,
    updateMateria
}