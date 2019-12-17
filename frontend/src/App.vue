<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="secondary" class='p-3'>
     <b-container >
       <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
       <b-navbar-brand href="#" class="navbar color_title">Canciones_infantiles</b-navbar-brand>
        <!-- <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1576555701/mis_images/antenna_ncowkt.png" alt="icon" id="logo">     -->
       <b-collapse is-nav id="nav_collapse">
         <b-navbar-nav class="navbar_texto">
           <b-nav-item :to="{name:'home'}"><i class="fa fa-home"> HOME</i></b-nav-item>
           <!-- <i class="fa fa-book"></i> -->
           <b-nav-item :to="{name:'materia'}"><i class="fa fa-book"> MATERIAS</i></b-nav-item>
           <b-nav-item :to="{name:'estudiante'}"><i class="fa fa-user"> ESTUDIANTES</i></b-nav-item>
           <b-nav-item :to="{name:'autores'}"><i class="fa fa-user"> AUTORES</i></b-nav-item>
           <b-nav-item :to="{name:'tema'}"><i class="fa fa-print"> TEMAS</i></b-nav-item>
           <b-nav-item :to="{name:'canciones'}"><i class="fa fa-headphones"> CANCIONES</i></b-nav-item>
           <!-- <b-nav-item :to="{name:'nestudiantes'}">Notas_estudiantes</b-nav-item> -->
         </b-navbar-nav>
         <!-- <b-navbar-nav class="ml-auto"> -->
          <b-navbar-nav>
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
       </b-collapse>
     </b-container>
   </b-navbar> 
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/materias">Materias</router-link> |
      <router-link to="/estudiantes">Estudiantes</router-link> |
      <router-link to="/autores">Autores</router-link>  |
      <router-link to="/temas">Temas</router-link> |
      <router-link to="/canciones">Canciones</router-link> |
      <router-link to="/nota_estudiantes">Notas_estudiante</router-link> 
    </div> -->
    <router-view/>
  </div>
</template>

<style>
.color_title {
   color: rgb(140,62,45);
}
#logo{
  width:5%;
   height:5%
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar_texto{
  font-family: 'Vollkorn', serif;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
