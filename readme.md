# Proyecto con Typescript

### Preparando el proyecto

1. Creamos el archivo .gitignore con la configuración de la página para "windows, linux, macOS, node" : (gitignore.io) https://www.toptal.com/developers/gitignore/
2. Descargamos el plugin de "config" y creamos el archivo de configuración (.editorconfig) con la configuración básica para el proyecto 
3. Creamos la carpeta src/
4. Creamos el archivo package.json con: npm init -y
5. Instalamos Typescript en nuestro proyecto con: npm install typescript --save-dev (la última parte para guardarlo como una dependencia de desarrollo ya que typescript no lo lee el navegador, tiene que ser local como desarrollo) - Like si usas la bandera “-D” en lugar de “–save-dev”-
    Para verificar la versión instalada:

    npx tsc --version
