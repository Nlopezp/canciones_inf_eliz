<template>
  <div class="container autores">
     <!-- EDIT AUTOR -->
     <form @submit.prevent='editarAutor(autorEditar)' v-if='editar'> 
        <h4 class="text-center mt-2">EDIT autor</h4>
        <input type="text" placeholder="Nombre" class="form-control my-2" v-model="autorEditar.nombre">
        <input type="text" placeholder="Segundo Nombre" class="form-control my-2" v-model="autorEditar.nombre2">
        <input type="text" placeholder="Apellido" class="form-control my-2" v-model="autorEditar.apellido">
        <input type="text" placeholder="Segundo apellido" class="form-control my-2" v-model="autorEditar.apellido2">
        <input type="text" placeholder="Identificacion" class="form-control my-2" v-model="autorEditar.identificacion">
        <input type="text" placeholder="Redes Sociales" class="form-control my-2" v-model="autorEditar.redesSociales">
        <button class="btn btn-dark my-4" type="submit">Actualizar</button>
      </form>
      <!-- NEW AUTOR  -->
      <form @submit.prevent='newAutor()' v-if='!editar'> 
        <h4 class="text-center mt-2">NEW autor</h4>
        <input type="text" placeholder="Nombre" class="form-control my-2" v-model="autor.nombre">
        <input type="text" placeholder="Segundo Nombre" class="form-control my-2" v-model="autor.nombre2">
        <input type="text" placeholder="Apellido" class="form-control my-2" v-model="autor.apellido">
        <input type="text" placeholder="Segundo apellido" class="form-control my-2" v-model="autor.apellido2">
        <input type="text" placeholder="Identificacion" class="form-control my-2" v-model="autor.identificacion">
        <input type="text" placeholder="Redes Sociales" class="form-control my-2" v-model="autor.redesSociales">
        <button class="btn btn-success mx-2" type="submit">Agregar</button>
        <button class="btn btn-info" type="submit" @click="editar=false">Cancelar</button>
      </form>
      <h4 class="my-4">Autores</h4>
      <div class="table table-responsive my-2">
         <table class="table">
            <thead>
               <tr>
                 <th>Nombre</th>
                 <th>Segundo Nombre</th>
                 <th>Apellido</th>
                 <th>Segundo Apellido</th>
                 <th>Identificación</th>
                 <th>Redes Sociales</th>
                 <th>Opciones</th>
               </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in autores" :key='index'>
                <td>{{item.nombre}}</td>
                <td>{{item.nombre2}}</td>
                <td>{{item.apellido}}</td>
                <td>{{item.apellido2}}</td>
                <td>{{item.identificacion}}</td>
                <td>{{item.redesSociales}}</td>
                <td>
                  <button class="btn btn-success my-2 mx-2" @click="activarEdicion(item._id)">Editar</button>
                  <button class="btn btn-danger my-2" @click='eliminarAutor(item._id)'>Eliminar</button>
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
     return {
       autores:[],
       autor:{nombre:'',nombre2:'',apellido:'',apellido2:'',identificacion:'',redesSociales:''},
       editar:false,
       autorEditar:{}
     };
   },
   created(){
      this.mostrarAutores();
   },
   methods:{
      mostrarAutores(){
         this.axios.get('/autores')
          .then((res)=>{
             this.autores=res.data.autores;
          })
          .catch(err=>{
             console.log(err)
          })
      },
      newAutor(){
         this.axios.post('/autor',this.autor)
          .then(res=>{
             this.autores.push(res.data.autor);
             this.autor.nombre='';
             this.autor.nombre2='';
             this.autor.apellido='';
             this.autor.apellido2='';
             this.autor.identificacion='';
             this.autor.redesSociales='';
          })
      },
      eliminarAutor(id){
         this.axios.delete(`autor/${id}`)
          .then(res=>{
             let index=this.autores.findIndex(aut=>aut._id===res.data._id);
             this.autores.splice(index,1); 
          })
          .catch(err=>{
             console.log(err.res);
          })
      },
      activarEdicion(id){
         this.editar=true;
         this.axios.get(`/autor/${id}`)
           .then(res=>{
              this.autorEditar = res.data.autor;
           })
           .catch(err=>{
              console.log(err.res)
           })
      },
      editarAutor(item){
         this.axios.put(`/autor/${item._id}`,item)
          .then(res=>{
              const index=this.autores.findIndex(aut=>aut._id === res.data.autor._id);
              this.autores[index].nombre=res.data.autor.nombre;
              this.autores[index].nombre2=res.data.autor.nombre2;
              this.autores[index].apellido=res.data.autor.apellido;
              this.autores[index].apellido=res.data.autor.apellido;
              this.autores[index].apellido2=res.data.autor.apellido2;
              this.autores[index].apellido2=res.data.autor.apellido2;
              this.autores[index].identificacion=res.data.autor.identificacion;
              this.autores[index].identificacion=res.data.autor.identificacion;
              this.autores[index].redesSociales=res.data.autor.redesSociales;
              this.editar=false;

          })
      }
   }
 }
</script>