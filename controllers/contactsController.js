/* eslint-disable no-unused-vars */
const { sequelize, contacts } = require('../models')

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

    createContact(req, res) {
        try {
            console.log('Create');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    updateContact(req, res) {
        try {
            console.log('Update');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ContactsController();
