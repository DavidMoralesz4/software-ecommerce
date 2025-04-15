import { Usuario } from '../entities/Usuario';

// Base de datos simulada
const usuarios: Usuario[] = [
  {
    id: 1,
    nombre: 'Juan',
    email: 'juan@ejemplo.com',
    activo: true
  },
  {
    id: 2,
    nombre: 'María',
    email: 'maria@ejemplo.com',
    activo: false
  }
];

export class UsuarioService {
  // Obtener todos los usuarios
  obtenerTodos(): Usuario[] {
    return usuarios;
  }

  // Obtener un usuario por ID
  obtenerPorId(id: number): Usuario | undefined {
    return usuarios.find(u => u.id === id);
  }

  // Crear un nuevo usuario
  crear(nombre: string, email: string, activo: boolean = false): Usuario {
    const nuevoUsuario: Usuario = {
      id: usuarios.length + 1,
      nombre,
      email,
      activo
    };
    
    usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }
} 