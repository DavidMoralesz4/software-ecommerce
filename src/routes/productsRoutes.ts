import { Router } from 'express';

const productsRouter = Router();

// Rutas para usuarios
productsRouter.get('/products', (req, res) => {
    res.send('Holla')
});

export default productsRouter; 