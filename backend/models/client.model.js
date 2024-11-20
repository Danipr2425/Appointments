module.exports = (sequelize,Sequelize) =>  {
    const Client = sequelize.define("client",{
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        filename: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });
    return Client;
};