const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const CancionSchema=new Schema({
    nombre:{type:String},
    genero:{type:String},
    duracion:{type:String},
    nregistro:{type:String,unique:true},
    autor:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Autor'
    }],
    tema:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Tema'
    }]
},{versionKey:false});

// module.exports=mongoose.model('Cancion',CancionSchema);
const Cancion=mongoose.model('Cancion',CancionSchema);
module.exports=Cancion;

