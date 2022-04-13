/* eslint-disable no-unused-vars */
'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('contacts', {
            contact_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            company: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            adress: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            birthday: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            operator: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('contacts');
    },
};
