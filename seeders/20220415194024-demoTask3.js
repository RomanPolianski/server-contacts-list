/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('tasks', [
            {
                task_id: 3,
                task_name: 'Visit Service',
                task_status: 'In Progress',
                contact_id: '22',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('tasks', null, {});
    },
};