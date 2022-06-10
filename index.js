const express = require('express')
const expressFileUpload = require('express-fileupload')
const path = require('path')
const app = express()
app.listen(3000)

app.use(expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit: "El peso del archivo que intentas subir supera el limite permitido",
})
);