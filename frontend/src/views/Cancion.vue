<template>
 <div class="container canciones mt-2">
     <h3>Canciones</h3>
     <div class="table table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Duración</th>
                    <th>N_registro</th>
                    <th>Id_autores</th>
                    <th>Id_temas</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(song,index) of songs" :key='index'>
                    <td>{{song.nombre}}</td>
                    <td>{{song.genero}}</td>
                    <td>{{song.duracion}}</td>
                    <td>{{song.nregistro}}</td>
                    <td>{{song.autor}}</td>
                    <td>{{song.tema}}</td>
                    <td>
                        <button class="btn btn-success sm my-2" @click="activarEdicion(song._id)">Edit</button>
                        <button class="btn btn-danger sm" @click='deleteCancion(song._id)'>Delete</button>
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
              songs:[]
          }
      },
      created(){
          this.mostrarSongs()
      },
      methods:{
          mostrarSongs(){
              this.axios.get('/canciones')
                .then(res=>{
                    this.songs=res.data.canciones
                })
                .catch(err=>{
                    console.log(err)
                })
          },
          activarEdicion(id){
              alert(`Edición activada ${id}`)
          },
          deleteCancion(id){
              alert(`Eliminando canción ${id}`)
          }
      }
  }
</script>
<style>

</style>