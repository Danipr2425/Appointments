const db = require("../models");
const Appoinment = db.appoinments;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  // Verificar que los campos 'date', 'hour', y 'clientId' estén presentes
  if (!req.body.date || !req.body.hour || !req.body.clientId) {
    return res.status(400).send({
      message: "Date, hour, and clientId are required."
    });
  }

  // Verificar si el cliente existe
  const clientExists = await db.clients.findByPk(req.body.clientId);
  if (!clientExists) {
    return res.status(404).send({ message: "Client not found." });
  }

  const appoinment = {
    date: req.body.date,
    hour: req.body.hour,
    clientId: req.body.clientId
  };

  Appoinment.create(appoinment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the appoinment."
      });
    });
};

exports.findAll = (req, res) => {
  Appoinment.findAll({
    include: [{
      model: db.clients,
      as: "client",  // Alias de la relación
      attributes: ['name']  // Solo incluimos el nombre del cliente
    }],
    where: {
      date: {
        [Op.gte]: new Date()  // Solo citas futuras
      }
    }
  })
  .then(data => {
    if (data && data.length > 0) {
      res.send(data);  // Respondemos con todas las citas y sus respectivos clientes
    } else {
      res.status(404).send({
        message: "No appointments found."
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving appointments.",
      error: err.message
    });
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Appoinment.findByPk(id, {
    include: [{
      model: db.clients,  // Relaciona la cita con el cliente
      as: "client",  // Alias de la relación
      attributes: ['name']  // Solo incluimos el nombre del cliente
    }]
  })
    .then(data => {
      if (data) {
        res.send(data);  // Respondemos con la cita y el nombre del cliente
      } else {
        res.status(404).send({
          message: 'Cannot find appoinment with id=${id}.'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving appoinment with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  if (!req.body.date || !req.body.hour) {
    return res.status(400).send({
      message: "Date and hour are required."
    });
  }

  const updateData = {
    date: req.body.date,
    hour: req.body.hour
  };

  Appoinment.update(updateData, { where: { id: id } })
    .then(num => {
      if (num[0] === 1) {
        res.send({ message: "Appoinment was updated successfully." });
      } else {
        res.status(404).send({
          message: `Cannot update Appoinment with id=${id}. Maybe Appoinment was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Appoinment with id=" + id
      });
    });
}; 

exports.delete = (req, res) => {
  const id = req.params.id;

  Appoinment.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "appoinment was deleted successfully!"
        });
      } else {
        res.send({
          message: 'Cannot delete appoinment with id=${id}. Maybe appoinment was not found!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete appoinment with id=" + id
      });
    });
};
