# C23 — Deploy en la Librería

## Descripción

Aplicación web de una librería desarrollada con React, TypeScript, Express, Prisma y PostgreSQL.

Este ejercicio consiste en publicar el frontend y el backend en Render, utilizando una base de datos PostgreSQL alojada en Neon.

## Aplicación publicada

- **Frontend (Render):** https://libreria-c23-frontend.onrender.com
- **Backend (Render):** https://libreria-c23-backend.onrender.com
- **API de libros:** https://libreria-c23-backend.onrender.com/api/libros
- **Repositorio:** https://github.com/yazsosa/ds2026-actividades

## Tecnologías utilizadas

- Frontend: React, TypeScript y Vite.
- Backend: Node.js, Express y TypeScript.
- ORM: Prisma.
- Base de datos: PostgreSQL en Neon.
- Hosting: Render.
- Autenticación: JWT.

## Estructura del proyecto

- `frontend/`: aplicación React.
- `backend/`: API REST, Prisma, migraciones y datos iniciales.

## Funcionalidades verificadas

- Visualización del catálogo con 15 libros.
- Consulta del detalle de cada libro.
- Navegación entre páginas y actualización con F5.
- Inicio y cierre de sesión.
- Diferenciación de permisos entre administrador y cliente.
- Acceso al formulario de alta de libros para administradores.

## Configuración del despliegue

**Backend — Render Web Service**

- Root Directory: `Ejercicios/C23_Deploy/backend`
- Build Command: `npm ci && npx prisma generate`
- Start Command: `npm start`

**Frontend — Render Static Site**

- Root Directory: `Ejercicios/C23_Deploy/frontend`
- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`
- Variable `VITE_API_URL`: `https://libreria-c23-backend.onrender.com/api`

Para permitir la navegación directa a rutas de React, se configuró en Render una regla `Rewrite` desde `/*` hacia `/index.html`.

## Base de datos

La base de datos PostgreSQL está alojada en Neon. Se aplicaron las migraciones de Prisma y se ejecutó un seed con autores, categorías, 15 libros y usuarios de prueba.

Las credenciales y variables sensibles se mantienen fuera del repositorio mediante archivos de entorno ignorados por Git.

## Estado del proyecto

Frontend, backend, base de datos y autenticación desplegados y probados correctamente.