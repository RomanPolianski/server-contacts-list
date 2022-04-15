/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('contacts', [{
        contact_id: 13,
        name: 'Dima',
        last_name: 'Jam',
        company: 'iTransition',
        phone: 295566232,
        email: 'example@example.com',
        adress: 'Tbilisi',
        operator: 'Life',
        createdAt: new Date(),
        updatedAt: new Date(),
        os: 'IOS'
      }]);
    },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('contacts', null, {});
  }
};
