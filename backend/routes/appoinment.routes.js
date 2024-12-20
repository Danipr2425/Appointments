module.exports = app => {
    const appoinments = require("../controllers/appoinment.controller.js");
   
    var router = require("express").Router();

    // Ruta para crear una cita asociada a un cliente
    router.post("/", appoinments.create);

    router.get("/", appoinments.findAll);
    router.get("/:id", appoinments.findOne);
    router.put("/:id", appoinments.update);
    router.delete("/:id", appoinments.delete);

    app.use('/api/appoinments', router);
};