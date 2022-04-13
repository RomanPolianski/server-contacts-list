/* eslint-disable no-unused-vars */
'use strict';

const { DATEONLY } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contacts', [{
      contact_id: 1,
      name: 'Roma',
      last_name: 'Pol',
      company: 'Sunmait',
      phone: 292566361,
      email: 'example@example.com',
      adress: 'Minsk',
      operator: 'MTS',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('contacts', null, {});
  }
};
