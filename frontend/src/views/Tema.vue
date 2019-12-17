<template>
  <div class="container tema mt-2">
    <h4 class="mt-2">Temas</h4>
     <div class="table">
        <table class="table">
           <thead>
             <tr>
               <th>Nombre_Tema</th>
               <th>Duración</th>
               <th>Opciones</th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="(topic, index) of temas " :key='index'>
               <td>{{topic.nombre_tema}}</td>
               <td>{{topic.duracion}}</td>
               <td>
                 <button class="btn btn-success sm mx-2" @click='activarEdicion(topic._id)'>Edit</button>
                 <button class="btn btn-danger" @click='eliminarTema(topic._id)'>Delete</button>
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
           temas:[]
        }
      },
      created(){
         this.mostrarTemas();
      },
      methods:{
        mostrarTemas(){
           this.axios.get('/temas')
            .then(res=>{
               this.temas=res.data.temas
            })
            .catch(err=>{
              console.log(err)
            })
        },
        activarEdicion(id){
           alert(`Edición activada ${id} `)
        },
        eliminarTema(id){
           alert(`Elimando Tema ${id}`);
        }
      }
   }
</script>

<style>
  
</style>