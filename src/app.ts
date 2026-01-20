import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import estudiantesRoutes from './routes/estudiantesRouters';
import profesoresRoutes from './routes/profesoresRouters';
import cursosRoutes from './routes/cursosRouters';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.get ('/', (req: Request, res: Response) => {
    console.log('Hola Mundo desde consola');
    res.send('Hola Mundo');
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes);

export default app;