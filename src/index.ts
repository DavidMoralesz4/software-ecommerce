import app from './app/app';
import { PORT } from './config/dotenv';

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 