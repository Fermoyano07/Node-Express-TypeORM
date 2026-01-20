import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import estudiantesRoutes from './routes/estudiantesRouters';
import profesoresRoutes from './routes/profesoresRouters';
import cursosRoutes from './routes/cursosRouters';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.get ('/', (req, res) => {
    res.send('Hola Mundo');
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes);

app.listen(6505, () => {
    console.log("Server activo");
});