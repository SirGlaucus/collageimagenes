# Desafío - Abracadabra

En este desafío deberás crear un servidor con Express y el paquete express-fileupload para almacenar las imágenes que estarán dentro del collage

## Instrucciones

- Descargar el proyecto
- Entrar en la terminal y ubicarse en la carpeta del proyecto
- Utilizar el comando `npm i`
- Preferiblemente tener instalado nodemon
- Con nodemon: `npm run startmon` para iniciar el proyecto. Sin nodemon: `npm start`.
- Entrar en el enlace [http://localhost:3000/](http://localhost:3000/)

### Habilidades a evaluar

 - Express-fileupload
 - Postman y body-parser
 - Eliminando archivos

### Requerimientos

- Integrar express-fileupload a Express.
- Definir que el límite para la carga de imágenes es de 5MB.
- Responder con un mensaje indicando que se sobrepasó el límite especificado.
- Crear una ruta POST /imagen que reciba y almacene una imagen en una carpeta pública del servidor. Considerar que el formulario envía un payload con una propiedad “position”, que indica la posición del collage donde se deberá mostrar la imagen.
- Crear una ruta GET /deleteImg/:nombre que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes. Considerar que esta interacción se ejecuta al hacer click en alguno de los números del collage.