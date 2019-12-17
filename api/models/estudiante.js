const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const EstudianteSchema=new Schema({
    materia:{
        type:Schema.Types.ObjectId, 
        ref:'Materia'
    },
    nombre:{type:String},
    nombre2:{type:String},
    apellido:{type:String},
    apellido2:{type:String},
    identificacion:{type:String,required:true,unique:true}
},{versionKey:false})

// module.exports=mongoose.model('Estudiante',EstudianteSchema);
const Estudiante=mongoose.model('Estudiante',EstudianteSchema);
module.exports=Estudiante;
// export default  Estudiante; 
