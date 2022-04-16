/* eslint-disable no-unused-vars */
const { sequelize, contacts, tasks } = require('../models');

class ContactsController {
    async getContacts(req, res) {
        try {
            const contact = await contacts.findAll({
                include: ['tasks'],
            });
            res.json(contact);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createContact(req, res) {
        try {
            const { id, name, lastName, company, phone, email, adress, operator, os, tasksUser } = req.body;
            const contact = await contacts.create({
                contact_id: id,
                name: name,
                last_name: lastName,
                company: company,
                phone: phone,
                email: email,
                adress: adress,
                operator: operator,
                os: os,
            });

            const t = [];

            for (const key of tasksUser) {
                const task = await tasks.create({
                    task_name: key.name,
                    task_status: key.status,
                    contact_id: id,
                });
                t.push(task);
            }

            res.json({
                message: 'Contact created successfully',
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateContact(req, res) {
        try {
            const { id, name, lastName, company, phone, email, adress, operator, os, tasksUser } = req.body;
            const contact = await contacts.update(
                {
                    contact_id: id,
                    name: name,
                    last_name: lastName,
                    company: company,
                    phone: phone,
                    email: email,
                    adress: adress,
                    operator: operator,
                    os: os,
                },
                { where: { contact_id: id } }
            );

            for (const key of tasksUser) {
                await tasks.update(
                    {
                        task_name: key.name,
                        task_status: key.status,
                    },
                    { where: { task_id: key.id ? key.id : (key.id = Math.floor(Math.random() * (1000 - 1 + 1)) + 1) } }
                );
            }
            res.json({
                message: 'Contact updated successfully',
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ContactsController();
