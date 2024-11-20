const db = require("../models");
const Client = db.clients;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
      return res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    if (!req.file) {
      return res.status(400).send({
        message: "No file uploaded."
      });
    }
  
    const client = {
      name: req.body.name,
      filename: req.file.filename
    };
  
    Client.create(client)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the client."
        });
      });
  };

exports.findAll = (req,res) => {
    Client.findAll()
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the client."
            })
        })
};

exports.findOne = (req,res) => {
    const id = req.params.id;
    Client.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: 'Cannot find client with id=${id}.'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving client with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  let updateData = req.body;

  // Si se ha subido una nueva imagen, se agrega el filename
  if (req.file) {
      updateData.filename = req.file.filename;
  } else {
      updateData.filename = "";  // O se mantiene el valor anterior
  }

  // Realizar la actualización en la base de datos
  Client.update(updateData, { where: { id: id } })
      .then((num) => {
          if (num[0] === 1) {
              // Si se actualizó correctamente, recuperar el cliente actualizado
              Client.findByPk(id)  // Buscar el cliente actualizado
                  .then((client) => {
                      res.send(client);  // Enviar los datos del cliente actualizado
                  })
                  .catch((err) => {
                      res.status(500).send({
                          message: 'Error recuperando cliente actualizado.'
                      });
                  });
          } else {
              res.status(404).send({
                  message: 'No se pudo actualizar el cliente con id=${id}.'
              });
          }
      })
      .catch((err) => {
          res.status(500).send({
              message: 'Error al actualizar el cliente.'
          });
      });
};

exports.delete = (req,res) => {
    const id = req.params.id;

    Client.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "client was deleted successfully!"
        });
      } else {
        res.send({
          message: 'Cannot delete client with id=${id}. Maybe client was not found!'
        });
      }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete client with id=" + id
      });
    });
};

exports.findByClient = (req, res) => {
  const clientId = req.params.clientId;

  Appoinment.findAll({
      where: { clientId: clientId },  // Filtramos por clientId
      include: [{
          model: db.clients,
          as: 'client',  // Alias de la relación
          attributes: ['id', 'name'],  // Solo mostrar el id y nombre del cliente
      }]
  })
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving the appoinments."
      });
  });
};