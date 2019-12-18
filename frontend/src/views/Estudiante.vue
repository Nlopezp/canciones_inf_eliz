<template>
  <div class="container estudiante">
    <form @submit.prevent="editarEstudiante(estudianteEditar)" v-if='editar'>
      <h4 class="mt-2">Edit Estudiante</h4>   
      <input type="text" class="form-control my-2" placeholder="Nombre" v-model="estudianteEditar.nombre">
      <input type="text" class="form-control my-2" placeholder="Nombre2" v-model='estudianteEditar.nombre2'>
      <input type="text" class="form-control my-2" placeholder="Apellido" v-model="estudianteEditar.apellido">
      <input type="text" class="form-control my-2" placeholder="Apellido2" v-model='estudianteEditar.apellido2'>
      <input type="text" class="form-control my-2" placeholder="Identificación" v-model='estudianteEditar.identificacion'>
      <input type="text" class="form-control my-2" placeholder="Materia" v-model='estudianteEditar.materia'>
      <button class="btn btn-success sm my-2" type="submit">Guardar</button>
      <button class="btn btn-warning sm my-2 mx-2" type="submit" @click="editar=false">Cancelar</button>
    </form>
    <form @submit.prevent="newEstudiante()" v-if='!editar'>
      <h4 class="mt-2"> New Estudiante </h4>    
      <input type="text" class="form-control my-2" placeholder="Nombre" v-model="estudiante.nombre">
      <input type="text" class="form-control my-2" placeholder="Nombre2" v-model='estudiante.nombre2'>
      <input type="text" class="form-control my-2" placeholder="Apellido" v-model="estudiante.apellido">
      <input type="text" class="form-control my-2" placeholder="Apellido2" v-model='estudiante.apellido2'>
      <input type="text" class="form-control my-2" placeholder="Identificación" v-model='estudiante.identificacion'>
      <input type="text" class="form-control my-2" placeholder="Materia" v-model='estudiante.materia'>
      <button class="btn btn-dark sm my-2 mx-2" type="submit">Agregar</button>
    </form>
    <div class="table-responsive" >
       <table class="table">
          <thead>  
            <tr>
              <th>Nombre</th>     
              <th>Segundo Nombre</th> 
              <th>Apellido</th> 
              <th>Segundo Apellido</th>    
              <th>Identificación</th>  
              <th>Materia</th>  
              <th>Opciones</th>  
            </tr>    
          </thead>   
          <tbody>
            <tr v-for="(item, index) of estudiantes" :key='index'>
              <td>{{item.nombre}}</td>
              <td>{{item.nombre2}}</td>
              <td>{{item.apellido}}</td> 
              <td>{{item.apellido2}}</td>  
              <td>{{item.identificacion}}</td>   
              <td>{{item.materia}}</td>
              <!-- <td>{{item.materia.credito}}</td> -->
              <td>
                <button class="btn btn-danger my-2" @click="Deletestudent(item._id)">Eliminar</button>
                <button class="btn btn-success my-2 mx-2" @click='activarEdicion(item._id)'>Editar</button>
              </td>
            </tr>
          </tbody>
       </table>
    </div>
  </div>
</template>
<script>
 export default {
    data(){
      return{
         estudiantes:[],
         estudiante:{nombre:'',nombre2:'',apellido:'',apellido2:'',identificacion:'',materia:''},
         editar:false,
         estudianteEditar:{}
      }
    },
    created(){
      this.mostrarEstudiantes();
    },
     methods:{
       mostrarEstudiantes(){
          this.axios.get('/estudiantes')
            .then((res)=>{
               this.estudiantes=res.data.estudiantes;  
            })
            .catch(err=>{
              console.log(`error ${err}`)   
            })
       },
       newEstudiante(){
          this.axios.post('/estudiante',this.estudiante)
          .then(res=>{
             this.estudiantes.push(res.data.estudiante);
             this.estudiante.nombre='';
             this.estudiante.nombre2='';
             this.estudiante.apellido='';
             this.estudiante.apellido2='';
             this.estudiante.identificacion='';
             this.estudiante.materia='';
          })
          .catch(err=>{
            console.log(err.res)
          })
       },
       Deletestudent(id){
         console.log(id);
         this.axios.delete(`/estudiante/${id}`)
          .then(res=>{
             const index=this.estudiantes.findIndex(est=>est._id === res.data._id);
             this.estudiantes.splice(index,1);
          }) 
          .catch(err=>{
             console.log(`Ha ocurrido un error ${err}`)
          })
       },  
       activarEdicion(id){
          this.editar=true;
          console.log(id);
          this.axios.get(`/estudiante/${id}`)
           .then(res=>{
              this.estudianteEditar=res.data.estudiante;
           })
           .catch(err=>{
              console.log(err.res)
           })
       }, 
       editarEstudiante(item){
           this.axios.put(`/estudiante/${item._id}`,item)
            .then(res=>{
               const index=this.estudiantes.findIndex(est=>est._id === res.data.estudiante._id);
                this.estudiantes[index].nombre=res.data.estudiante.nombre;
                this.estudiantes[index].nombre2=res.data.estudiante.nombre2;
                this.estudiantes[index].apellido=res.data.estudiante.apellido;
                this.estudiantes[index].apellido2=res.data.estudiante.apellido2;
                this.estudiantes[index].identificacion=res.data.estudiante.identificacion;
                this.estudiantes[index].materia=res.data.estudiante.materia;
                this.editar=false
            })
       }
    }
 }
</script>
