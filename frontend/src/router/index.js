import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/estudiantes',
    name: 'estudiante',
    component: () => import('../views/Estudiante.vue')
  },
  {
    path:'/materias',
    name:'materia',
    component:()=>import('../views/Materia.vue')
  },
  {
    path:'/temas',
    name:'tema',
    component:()=>import('../views/Tema.vue')
  },
  {
    path:'/canciones',
    name:'canciones',
    component:()=>import('../views/Cancion.vue')
  },
  {
    path:'/nota_estudiantes',
    name:'nota_estudiante',
    component:()=>import('../views/Nota_estudiante.vue')
  },
  {
    path:'/autores',
    name:'autores',
    component:()=>import('../views/Autor.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
