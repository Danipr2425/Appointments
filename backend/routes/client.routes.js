module.exports = app => {
    const client = require("../controllers/client.controller.js");  // Asegúrate de que el controlador esté correctamente importado
    var upload = require('../multer/upload');  // Configuración de multer para cargar archivos

    var router = require("express").Router();

    router.post("/", upload.single('file'), client.create);  // Aquí se espera un archivo, si no lo subes, puedes quitarlo

    router.get("/", client.findAll);
    router.get("/:id", client.findOne);
    router.put("/:id", upload.single('file'), client.update);
    router.delete("/:id", client.delete);

    app.use('/api/clients', router);  // Definimos la ruta base '/api/clients'
};