//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res) =>{
    res.status(200).json({ message : "Get all contacts"});
};

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req,res) =>{
    res.status(201).json({ message : "Create contact"});
};

//@desc Get new contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res) =>{
    res.status(200).json({ message : `Get Contact for ${req.params.id}`});
};

//@desc update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res) =>{
    res.status(200).json({ message : `Update Contact for ${req.params.id}`});
};

//@desc Get all contacts
//@route GET /api/contacts/:id
//@access public
const deleteContact = (req,res) =>{
    res.status(201).json({ message : `Delete contact for ${req.params.id}`});
};

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };