/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('contacts', 'os', {
            type: Sequelize.STRING,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('contacts', 'os');
    },
};

