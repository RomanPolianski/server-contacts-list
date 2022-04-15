/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('contacts', [
            {
                contact_id: 3,
                name: 'Lana',
                last_name: 'Som',
                company: 'Prada',
                phone: 295566212,
                email: 'som@example.com',
                adress: 'LA',
                operator: 'A1',
                createdAt: new Date(),
                updatedAt: new Date(),
                os: 'Android',
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('contacts', null, {});
    },
};
