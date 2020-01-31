const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const NestudianteSchema=new Schema({
    nota1:{type:Number},
    nota2:{type:Number},
    nota3:{type:Number},
    notafinal: {type: Number} 
    // tema:[{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref:'Tema'
    // }],
    // estudiante:[{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref:'Estudiante'
    // }]
},{versionKey:false})
const Nota=mongoose.model('Nota',NestudianteSchema);
module.exports=Nota;
