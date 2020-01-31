// Importamos
import express from 'express';
const app = express();
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';
const port = process.env.PORT || 3000;
//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Importamos las rutas
app.use(router);

const history=require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));


// db local
let db="mongodb://localhost:27017/canciones_infantiles";
mongoose.set('useCreateIndex', true);

//Promise
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
  .then(()=>{
      console.log('Conexión a la db establecida')
  })
  .catch(err=>{
      console.log(`Error al conectar a la db ${err}`)
  })
app.listen(port,()=>{
    console.log(`Connection on port ${port}`)
})

//Callback
// mongoose.connect(db, { useNewUrlParser: true,useUnifiedTopology: true }, (err, res) => {
//     if (err) {
//         console.log(`Error al conectar a la db ${err}`)
//     }
//     else {
//         console.log('Conexión a la base de datos establecida')
//     }
//     app.listen(port, () => {
//         console.log(`Connection on port ${port}`)
//     })
// })
