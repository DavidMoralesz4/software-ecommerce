import app from './app/app';
import { AppDataSource } from './config/data-source';
import { PORT } from './config/dotenv';
import "reflect-metadata"

// Iniciar el servidor

const connected = async() => {
  try {
    await AppDataSource.initialize()
    console.log(`base de datos conectada con exito!`);
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en ${PORT} 🚀`);
    }); 
  } catch (error) {
    console.error('Error durante la conexion con la base de datos', error)
    process.exit(1);
  }
}

connected();