class ContactsController {
    getContacts(req, res) {
      try {
        console.log('Get');
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