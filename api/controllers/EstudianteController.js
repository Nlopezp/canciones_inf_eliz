import Estudiante from '../models/estudiante';
// Estudiantes
let getEstudiantes=(req,res)=>{
    Estudiante.find()
       .populate('materia',{creditos: 0,_id:0})
       .exec((err,estudiantes)=>{
           if(err){
               res.status(500).send({
                   message:`Error en el server ${err}`
               })
           }
           if(!estudiantes){
               res.status(404).send({
                   message:'No existen estudiantes'
               })
           }
           res.status(200).send({
               estudiantes
           })
       })
};
let newEstudiante=(req,res)=>{
    let estudiante=new Estudiante({
        nombre:req.body.nombre,
        nombre2:req.body.nombre2,
        apellido:req.body.apellido,
        apellido2:req.body.apellido2,
        identificacion:req.body.identificacion,
        materia:req.body.materia
    })
    estudiante.save((err,estudiante)=>{
       if(err){
            res.status(500).send({
                message:`Error al guardar el estudiante ${err}`
            })
       }else{
           res.status(200).send({
               estudiante
           })
       }
    })
};

let getEstudiante=(req,res)=>{
    let {id}=req.params;
    Estudiante.findById(id,(err,estudiante)=>{
        if(err){
            res.status(500).send({
                message:`Error en el server ${err}`
            })
        }
        if(!estudiante){
            res.status(404).send({
                message:'No existe el estudiante'
            })
        }
        res.status(200).send({
            estudiante
        })
    })
};

let deleteEstudiante=(req,res)=>{
    let {id}=req.params;
    Estudiante.findByIdAndDelete(id,(err,estudiante)=>{
        if(err){
            res.status(500).send({
                message:`Error en el server ${err}`
            })
        }else{
            res.status(200).json({
                menssage:'El estudiante se ha eliminado con exito'
            })
        }
        // Estudiante.deleteOne(err=>{
        //     if(err){
        //         res.status(500).send({
        //             message:`Error al eliminar el estudiante ${err}`
        //         })
        //     }else{
        //         res.status(200).send({
        //             message:'El estudiante se ha eliminado con exito'
        //         })
        //     }
        // })
    })
};

let updateEstudiante=(req,res)=>{
    let {id}=req.params;
    let update=req.body;
    Estudiante.findByIdAndUpdate(id,update,{new:true},(err,estudianteUpdated)=>{
       if(err){
           res.status(500).send({
               message:`Error al actualizar el estudiante ${err}`
           })
       }
       else{
           res.status(200).send({
               estudiante:estudianteUpdated
           })
       }
    })
}

module.exports={

    getEstudiantes,
    newEstudiante,
    getEstudiante,
    deleteEstudiante,
    updateEstudiante
};
