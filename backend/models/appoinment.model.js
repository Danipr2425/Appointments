module.exports = (sequelize,Sequelize) =>  {
    const Appoinment = sequelize.define("appoinment",{
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
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
        filename: {
            type: Sequelize.STRING,
        }
    });
    return Appoinment;
};