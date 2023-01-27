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
