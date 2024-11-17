module.exports = app => {
    const appoinments = require("../controllers/appoinment.controller.js");
    var upload = require('../multer/upload');

    var router = require("express").Router();

    router.post("/", upload.single('file'), appoinments.create);

    router.get("/", appoinments.findAll);

    router.get("/:id", appoinments.findOne);

    router.put("/:id", appoinments.update);

    router.delete("/:id", appoinments.delete);

    app.use('/api/appoinments', router);
};