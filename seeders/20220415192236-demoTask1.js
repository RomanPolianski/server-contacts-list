/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('tasks', [
            {
                task_id: 1,
                task_name: 'Call Roma',
                task_status: 'Completed',
                contact_id: '3',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('tasks', null, {});
    },
};
