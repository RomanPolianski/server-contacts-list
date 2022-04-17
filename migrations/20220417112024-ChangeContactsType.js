/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('contacts', 'phone', {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn('contacts', 'phone', {
            type: Sequelize.INTEGER,
            allowNull: false,
        });
    },
};
