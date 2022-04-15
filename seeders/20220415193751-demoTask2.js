/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('tasks', [
            {
                task_id: 2,
                task_name: 'Telegram Lana',
                task_status: 'In Progress',
                contact_id: '13',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('tasks', null, {});
    },
};