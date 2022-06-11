const express = require('express')
const expressFileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const fs = require("fs")
app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})

//Configuracion del FIleUpload
app.use(expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit: 'El peso del archivo que intentas subir supera el limite permitido',
})
)

// Para poderutilizar la carpeta de imagenes
app.use(express.static('assets'))

// Integrar el paquete body parser usando el método “use” de la constante “app”.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta base de formulario
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/formulario.html') // TODO: cambiar esto con path
})

// Ruta para subir imagenes
app.post('/imagen', (req, res) => {
    const { posicion } = req.body
    const { target_file } = req.files
    const ruta = path.join(__dirname, 'assets', 'imgs', `imagen-${posicion}.jpg`) // Utiliza el path.join para facilitar las rutas
    target_file.mv(ruta, (err) => {
        // res.redirect('/imgs/imagen-1.jpg')
        res.redirect('/collage')
    })
})

// Abre el HTML de collage donde se muestran las imagenes
app.get('/collage', (req, res) => {
    res.sendFile(__dirname + '/collage.html') // TODO: cambiar esto con path
})

// Ruta para eliminar de imagen
app.get('/deleteImg/:nombre', (req, res) => {
    const { nombre } = req.params
    const ruta = path.join(__dirname, 'assets', 'imgs', nombre) // Utiliza el path.join para facilitar las rutas
    fs.unlink(ruta, (err) => {
        res.redirect('/collage')
    })
})