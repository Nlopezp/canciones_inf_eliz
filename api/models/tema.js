const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TemaSchema=new Schema({
    nombre_tema:{type:String,unique:true},
    duracion:{type:String},
    materia:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Materia'
    }
},{versionKey:false});

// module.exports=mongoose.model('Tema',TemaSchema);
const Tema=mongoose.model('Tema',TemaSchema);
module.exports=Tema;