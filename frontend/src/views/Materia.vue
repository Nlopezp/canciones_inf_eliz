<template>
  <div class=" container materia">
    <form @submit.prevent="editarMateria(materiaEditar)" v-if='editar'>
       <h4>Edit Materia</h4>
       <input type="text" class="form-control my-2" placeholder="Nombre" v-model="materiaEditar.nombre">
       <input type="text" class="form-control my-2" placeholder="Creditos" v-model='materiaEditar.creditos'>
       <!-- <input type="text" class="form-control my-2" placeholder="Estudiantes" v-model="materiaEditar.estudiante"> -->
       <button class="btn btn-success sm my-2" type="submit">Guardar</button>
       <button class="btn btn-danger sm my-2 mx-2" type="submit" @click='editar=false'>Cancelar</button>
    </form>
    <form @submit.prevent='newMateria()' v-if='!editar'>
       <h4 class="mt-2">New Materia</h4>
         <input type="text" class="form-control my-2" placeholder="Materia" v-model="materia.nombre">
         <input type="text" class="form-control my-2" placeholder="creditos" v-model='materia.creditos'>
         <!-- <input type="text" class="form-control my-2" placeholder="Estudiantes" v-model='materia.estudiante'> -->
         <button class="btn btn-dark sm my-2 mx2" type="submit">Agregar</button>
    </form>
    <!--Inicio tabla -->
    <div class="table table-responsive">   
     <h4>Materias</h4>
      <table class="table">
       <thead>
         <tr>
           <th>Nombre</th>
           <th>Creditos</th>
           <!-- <th>Estudiante</th> -->
           <th>Opciones</th>
         </tr>
       </thead>
       <tbody>
          <tr v-for="(mat,index) of materias" :key='index'>
            <td>{{mat.nombre}}</td>
            <td>{{mat.creditos}}</td>
            <!-- <td>{{mat.estudiante.nombre}}</td> -->
            <td>
              <button class="btn btn-danger my-2" @click="Deletemateria(mat._id)">Eliminar</button>
              <button class="btn btn-success mx-2" @click="activarEdicion(mat._id)">Editar</button>
            </td>
          </tr>
       </tbody>
      </table>
    </div>
    <!-- Fin tabla -->
  </div>
</template>
<script>
  export default {
     data(){
       return {
          materias:[],
          materia:{nombre:'',creditos:''},
          editar:false,
          materiaEditar:{}
       }
     },
     created(){
        this.mostrarMaterias();
     },
     methods:{
        mostrarMaterias(){
          this.axios.get('/materias')
           .then((res)=>{
              this.materias=res.data.materias;
           })
           .catch(err=>{
              console.log(err.res)
           })
        },
        newMateria(){
           this.axios.post('/materia',this.materia)
           .then(res=>{
              this.materias.push(res.data.materia);
              this.materia.nombre='';
              this.materia.creditos='';
           })
           .catch(err=>{
             console.log(err.res);
           })
        },
        Deletemateria(id){
          this.axios.delete(`/materia/${id}`)
          .then(res=>{
             const index=this.materias.findIndex(mater=>mater._id === res.data._id);
             this.materias.splice(index,1);
          }) 
          .catch(err=>{
             console.log(`Ha ocurrido un error ${err}`)
          })
        },
        activarEdicion(id){
          this.editar=true;
          console.log(id);
          this.axios.get(`/materia/${id}`)
           .then(res=>{
              this.materiaEditar=res.data.materia;
           })
           .catch(err=>{
              console.log(err.res)
           })
       }, 
       editarMateria(item){
           this.axios.put(`/materia/${item._id}`,item)
            .then(res=>{
               const index=this.materias.findIndex(mater=>mater._id === res.data.materia._id);
                this.materias[index].nombre=res.data.materia.nombre;
                this.materias[index].creditos=res.data.materia.creditos;
                // this.materias[index].estudiante=res.data.materia.estudiante;
                this.editar=false
            })
       }
     }
  }
</script>


