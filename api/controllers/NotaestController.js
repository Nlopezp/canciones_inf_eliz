const Notaest=require('../models/notaestudiante');

let getNotaestudiantes=(req,res)=>{
    Notaest.find()
     .populate('tema')
     .populate('estudiante')
     .exec((err,notaestudiantes)=>{
         if(err){
             res.status(500).send({
                 message:`Error en el server ${err}`
             })
         }
         if(!notaestudiantes){
             res.status(404).send({
                 message:'No existen notas de estudiantes'
             })
         }
         res.status(200).send({
             notaestudiantes
         })
     })
};
let getNotaestudiante=(req,res)=>{
    let {id}=req.params;
    Notaest.findById(id, (err, notaestudiante) => {
        if (err) {
            res.status(500).json({
                menssage: `Error al mostrar la nota del estudiante ${err}`
            })
        }
        if (!notaestudiante) {
            res.status(404)
                .json({ menssage: 'No existe la nota del estudiante' })
        }
        res.status(200)
            .json({
               notaestudiante
            })
    })
};
let newNotaestudiante=(req,res)=>{
    let notaestudiante=new Notaest({
        promedio:[{
            nota1: req.body.nota1,
            nota2: req.body.nota2,
            nota3: req.body.nota3,
            notafinal: req.body.notafinal
        }]
        // total:req.body.total,
        // tema:req.body.tema,
        // estudiante:req.body.estudiante
    })
    notaestudiante.save((err, notaestudiante,notafinal) => {
        if (err) {
            res.status(500)
                .json({
                    message: `Error al guardar la nota del estudiante ${err}`
                })
        } else {
            res.status(200)
                .json({
                   notaestudiante
                })
        }
    })
};

let deleteNotaestudiante=(req,res)=>{
    let {id}=req.params;
   Notaest.findById(id,(err,notaestudiante)=>{
        if(err){
            res.status(500).json({
                message:`Error al realizar la petición ${err}`
            })
        }
       Notaest.deleteOne(err=>{
           if(err){
               res.status(500).json({
                   message:`Error al eliminar la nota del estudiante ${err}`
               })
           }else{
               res.status(200).json({
                   message:'La nota del estudiante ha sido eliminada con exito'
               })
           }
       })
    })
};

let updateNotaestudiante=(req,res)=>{
    let {id}=req.params;
    let update=req.body;
    Notaest.findByIdAndUpdate(id,update,{new:true},(err,notaestudianteUpdated)=>{
        if(err){
            res.status(500).json({
                ok:false,
                message:`Error al nota del estudiante ${err}`
            })
        }
        res.status(200).json({
            notaestudiante:notaestudianteUpdated
        })
    })
}

module.exports={
    getNotaestudiantes,
    getNotaestudiante,
    newNotaestudiante,
    deleteNotaestudiante,
    updateNotaestudiante
}