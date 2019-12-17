const Cancion=require('../models/cancion');

let getCanciones=(req,res)=>{
    Cancion.find()
       .populate('autor')
       .populate('tema')
        .exec((err,canciones)=>{
            if(err){
                res.status(500).send({
                    message:`Error en el server ${err}`
                })
            }
            if(!canciones){
                res.status(404).send({
                    message:'No existen canciones'
                })
            }
            res.status(200).send({
                canciones
            })
        })
};

// getCanciones=(req,res)=>{
//     Cancion.find({},(err,canciones)=>{
//         if(err){
//             res.status(500).send({
//                 message:`Error en el server ${err}`
//             })
//         }
//         if(!canciones){
//             res.status(404).send({
//                 message:'No existen canciones'
//             })
//         }
//         res.status(200).send({
//             canciones
//         })
//     })
// };

let getCancion=(req,res)=>{
    let {id}=req.params;
    Cancion.findById(id, (err, cancion) => {
        if (err) {
            res.status(500).json({
                menssage: `Error al mostrar la cancion ${err}`
            })
        }
        if (!cancion) {
            res.status(404)
                .json({ menssage: 'No existe la cancion' })
        }
        res.status(200)
            .json({
                cancion
            })
    })
};
let newCancion=(req,res)=>{
    let cancion=new Cancion({
        nombre: req.body.nombre,
        genero: req.body.genero,
        duracion: req.body.duracion,
        nregistro:req.body.nregistro,
        autor:req.body.autor,
        tema:req.body.tema
    })
    cancion.save((err, cancion) => {
        if (err) {
            res.status(500)
                .json({
                    message: `Error al guardar la cancion ${err}`
                })
        } else {
            res.status(200)
                .json({
                    cancion
                })
        }
    })
};

let deleteCancion=(req,res)=>{
    let {id}=req.params;
    Cancion.findById(id,(err,cancion)=>{
        if(err){
            res.status(500).json({
                message:`Error al realizar la petición ${err}`
            })
        }
       Cancion.deleteOne(err=>{
           if(err){
               res.status(500).json({
                   message:`Error al eliminar la canción ${err}`
               })
           }else{
               res.status(200).json({
                   message:'La canción ha sido eliminada con exito'
               })
           }
       })
    })
};

let updateCancion=(req,res)=>{
    let {id}=req.params;
    let update=req.body;
    Cancion.findByIdAndUpdate(id,update,{new:true},(err,cancionUpdated)=>{
        if(err){
            res.status(500).json({
                ok:false,
                message:`Error al actualizar la canción ${err}`
            })
        }
        res.status(200).json({
            cancion:cancionUpdated
        })
    })
}

module.exports={
    getCanciones,
    getCancion,
    newCancion,
    deleteCancion,
    updateCancion
}