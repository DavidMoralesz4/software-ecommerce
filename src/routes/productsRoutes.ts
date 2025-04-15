import { Router } from 'express';

const productsRouter = Router();

// Rutas para usuarios
productsRouter.get('/products', (req, res) => {
    res.cookie('my-cookie-name', 'my-cookies', {
        maxAge: 9000,
        httpOnly: true,
        sameSite: "lax",
    }); // Esto ya está correcto
    res.send('Hola Mundo');
  });

export default productsRouter; 