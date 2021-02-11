# weather-app
Weather app que consiste de un bff desarrollado con Node.js y Express para organizar el resultado de las llamadas a las apis externas y hacer un prefiltrado de lo que se va a enviar al front a través de varios endpoints, y un frontend desarrollado con React y Tailwind que realiza calls al bff y luego muestra en pantalla esos resultados.

Cliente:

React
Tailwind
TypeScript

Servidor:

Node
Express
TypeScript
Nodemon (watcher)
Requisitos: Node >= 6 Npm Nodemon (npm i -g nodemon)

Configuración:

Clonar el repositorio. Desde la carpeta "client" correr el comando "npm install".
Luego en la carpeta "server" correr el comando "npm install" y luego, en caso de no tenerlo instalado, "npm install -g nodemon".

Para correr la aplicación:

Desde la carpeta "client" correr el comando "npm start". Debería inicializarse por defecto en localhost:3000.
Luego en la carpeta "server" correr el comando "nodemon". Debería inicializarse por defecto en localhost:8080.

Deuda técnica:
- Migración de toda la app a Next.js
- En el backend no logré resolver el tipado del objeto que usé para organizar los endpoints originales, que consiste de dos keys cuyos valores son template strings. Dado que estos template strings estan recibiendo parámetros para armar la url, TypeScript me arrojaba un error cuando quería asignarle el tipo string, porque los strings no pueden técnicamente recibir parámetros.
