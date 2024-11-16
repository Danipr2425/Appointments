module.exports = (sequelize,Sequelize) =>  {
    const Appoinment = sequelize.define("appoinment",{
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        hour: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Appoinment;
};