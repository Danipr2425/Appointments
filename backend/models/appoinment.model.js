module.exports = (sequelize, Sequelize) => {
    const Appoinment = sequelize.define("appoinment", {
        date: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                isDate: true, // Asegura que sea una fecha válida
            }
        },
        hour: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        clientId: {  // Esto es para asociar la cita al cliente
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'clients', // Relación con la tabla clients
                key: 'id',
            }
        }
    });

    return Appoinment;
};