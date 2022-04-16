const express = require('express');
const contactsController = require('./controllers/contactsController');

const router = express.Router();

router.get('/contacts', contactsController.getContacts);
router.post('/create-contact', contactsController.createContact);
router.put('/update-contact', contactsController.updateContact);
router.delete('/delete-contact/:id', contactsController.deleteContact);

module.exports = router;