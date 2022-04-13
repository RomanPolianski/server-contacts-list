const express = require('express');

const router = express.Router();

router.get('/contacts');
router.post('/create-contact');
router.patch('/update-contact');

module.exports = router;