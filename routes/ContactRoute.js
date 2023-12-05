import express from 'express';
import { getContact, submitContact } from '../controllers/ContactController.js';

const router = express.Router();

router.get('/contacts', getContact);
router.post('/contacts/submit-contact', submitContact);

export default router;
