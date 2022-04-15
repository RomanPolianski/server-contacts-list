/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('contacts', [
            {
                contact_id: 22,
                name: 'Roma',
                last_name: 'Pol',
                company: 'Sunmait',
                phone: 295566212,
                email: 'rppol@example.com',
                adress: 'Minsk',
                operator: 'MTS',
                createdAt: new Date(),
                updatedAt: new Date(),
                os: 'BlackBerryOS',
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('contacts', null, {});
    },
};
