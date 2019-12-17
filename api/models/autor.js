const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const AutorSchema=new Schema({
    nombre:{type:String},
    nombre2:{type:String},
    apellido:{type:String},
    apellido2:{type:String},
    identificacion:{type:String,unique:true},
    redesSociales:{type:String}
},{versionKey:false});
const Autor=mongoose.model('Autor',AutorSchema);
module.exports= Autor;


// la coleccion debe estar en plural
