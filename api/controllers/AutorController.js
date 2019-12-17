const Autor=require('../models/autor');

let getAutores= (req,res)=>{
    Autor.find({},(err,autores)=>{
        if(err){
            res.status(500).send({
                message:`Error en el server ${err}`
            })
        }
        if(!autores){
            res.status(404).send({
                message:'No existen autores'
            })
        }
        res.status(200).send({
            autores
        })
    })
};
let newAutor=(req,res)=>{
    let autor=new Autor({
        nombre: req.body.nombre,
        nombre2: req.body.nombre2,
        apellido: req.body.apellido,
        apellido2: req.body.apellido2,
        identificacion: req.body.identificacion,
        redesSociales:req.body.redesSociales
    })
    autor.save((err, autor) => {
        if (err) {
            res.status(500)
                .json({
                    message: `Error al guardar el autor ${err}`
                })
        } else {
            res.status(200)
                .json({
                    autor
                })
        }
    })
};
let getAutor=(req,res)=>{
    let {id}=req.params;
    Autor.findById(id, (err, autor) => {
        if (err) {
            res.status(500).json({
                menssage: `Error al mostrar el autor ${err}`
            })
        }
        if (!autor) {
            res.status(404)
                .json({ menssage: 'No existe el autor' })
        }
        res.status(200)
            .json({
                autor
            })
    })
};

let deleteAutor=(req,res)=>{
    let {id}=req.params;
    Autor.findByIdAndDelete(id,(err)=>{
        if(err){
            res.status(500).json({
                message:`Error al realizar la petición ${err}`
            })
        }else{
            res.status(200).json({
                message:'El autor ha sido eliminado con exito'
            })
        }
    })
};

let updateAutor=(req,res)=>{
    let {id}=req.params;
    let update=req.body;
    Autor.findByIdAndUpdate(id,update,{new:true},(err,autorUpdated)=>{
        if(err){
            res.status(500).json({
                ok:false,
                message:`Error al actualizar el autor ${err}`
            })
        }
        res.status(200).json({
            autor:autorUpdated
        })
    })
}

module.exports={
    getAutores,
    getAutor,
    newAutor,
    deleteAutor,
    updateAutor
}