import Contact from '../models/ContactModel.js';

// GET ALL CONTACTS
export const getContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE NEW CONTACT
export const submitContact = async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  const newContact = new Contact({
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  });

  try {
    await newContact.save();
    res.status(201).json('Message Succesfully Submit!');
  } catch (error) {
    next(error);
  }
};
