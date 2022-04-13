/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('contacts', 'birthday');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('contacts');
  }
};
