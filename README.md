# Proyecto Node.js con TypeScript

Este es un proyecto base para desarrollar aplicaciones con Node.js y TypeScript.

## Estructura del proyecto

```
.
├── src/             # Código fuente TypeScript
├── dist/            # Código compilado JavaScript (generado)
├── package.json     # Dependencias y scripts
├── tsconfig.json    # Configuración de TypeScript
└── README.md        # Este archivo
```

## Dependencias instaladas

- **typescript**: Compilador de TypeScript
- **@types/node**: Definiciones de tipos para Node.js
- **ts-node**: Ejecuta archivos TypeScript directamente

## Scripts disponibles

- `npm run dev`: Ejecuta el proyecto en modo desarrollo usando ts-node
- `npm run build`: Compila el proyecto de TypeScript a JavaScript
- `npm start`: Ejecuta la versión compilada del proyecto
- `npm run clean`: Elimina la carpeta de distribución
- `npm run prebuild`: Se ejecuta automáticamente antes del build para limpiar la carpeta dist

## Cómo empezar

1. Clona este repositorio
2. Instala las dependencias: `npm install`
3. Ejecuta en modo desarrollo: `npm run dev`
4. Para compilar y ejecutar en producción:
   ```
   npm run build
   npm start
   ``` 