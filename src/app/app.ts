import express from 'express';
import morgan from 'morgan'
import productsRouter from '../routes/productsRoutes';
import cookieParser from 'cookie-parser';
import authRoute from '../routes/authRoute';

// Crear la aplicación Express
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser())
app.use(morgan('dev'));

// Configurar rutas
app.use('/api', productsRouter);
app.use('/api', authRoute);

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

export default app; 