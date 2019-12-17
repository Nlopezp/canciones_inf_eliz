const mongoose=require('mongoose');
// import mongoose from 'mongoose'
const Schema=mongoose.Schema;
const MateriaSchema=new Schema({
    nombre:{type:String},
    // nmateria:{type:String},
    creditos:{type:String},
    estudiante:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Estudiante'
    }
},{versionKey:false});

// module.exports=mongoose.model('Materia',MateriaSchema)

const Materia=mongoose.model('Materia',MateriaSchema);
module.exports=Materia;
