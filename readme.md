# Proyecto con Typescript

### Preparando el proyecto

1. Creamos el archivo .gitignore con la configuración de la página para "windows, linux, macOS, node" : (gitignore.io) https://www.toptal.com/developers/gitignore/
2. Descargamos el plugin de "config" y creamos el archivo de configuración (.editorconfig) con la configuración básica para el proyecto 
3. Creamos la carpeta src/
4. Creamos el archivo package.json con: npm init -y
5. Instalamos Typescript en nuestro proyecto con: npm install typescript --save-dev (la última parte para guardarlo como una dependencia de desarrollo ya que typescript no lo lee el navegador, tiene que ser local como desarrollo) - Like si usas la bandera “-D” en lugar de “–save-dev”-
    Para verificar la versión instalada:

    npx tsc --version

// Activando poderes de TypeScript en JavaScript 🧐
Si estás en Visual Studio Code, puedes activar el analizador de código estático de TypeScript sobre un archivo JavaScript. Para esto, en la primera línea del archivo debe ir lo siguiente:

//@ts-check

6. Iniciamos typescript con npx tsc --init; se creara el archivo tsconfig

7. Configuramos tsconfig: 
    "outDir": "./dist", -> Para que cada archivo compilado de typescript se guarde en la carpeta /dist con archivo,js
    "rootDir": "./src", -> Todo el codigo que necesita en typescript esta en /src

8. Creamos un primer archivo demo con el código dado para provar el inicio de typescript, ya que configuramos el root, tenemos que iniciar en la terminal con: npx tsc

9. Cuando modificas el archivo typescript, puedes configurar para que no tengamos que iniciar siempre el ty con: npx tsc --watch, constantemente va a leer los archivos typescript y van a hacer la transpilación 

10. Para ejecutar algúno de los Js que ha transcribido typescript en la carpeta dist, usamos el siguiente comando: node dist/04-numbers.js

11. Para revisar si una libreria esta creada con Typescript, podemos revisar en su código base para ver si tiene el archivo tsconfig.json, con vscode podemos revisar:
  Instalamos la libreria date-fns : npm install date-fns --save


12. Si la libreria no tiene typescript por ejemplo: 
  En lodash, se dice que para traer la libreria es con:
  Load the full build.
  var _ = require('lodash');
  
  Pero para manejarlo con typescript que es nuestro tipado favorito, vamos a importarlo como lo hacemos con los módulos de typescript
  
  import _ from 'lodash';


Luego, ya que typescript esta instalado en nuestro proyecto, el tiene el typado para diversas librerias, en este caso y la que nos recomienda incluso vscode es:


npm i --save-dev @types/lodash
```
