const Contact = require('../models/contact')

exports.getMainPage = (req, res) => {
    Contact.fetchContacts(items => {
        res.render('index.ejs', {contactBook: items }); //koos sellega saadame jsoni kasutajale,
        // brauser võtab, pakib kokku, loeb html ja leiab markerid süstitud andmetega ja kuvab kasutajale.
    }); 
} 
exports.postNewContact = (req, res) => {
    let userContact = {
        name: req.body.newContact,
        phone: req.body.newContactPhone
    }
    const newContact = new Contact(userContact);
    newContact.saveContact();
    res.redirect('/');
} //exports tähendab et võib koodi edasi anda teistele

exports.deleteContact = (req, res) => {
   // let itemToDelete = req.body.checkbox;
   let userContact = {
       name: req.body.hiddenName,
       phone: req.body.hiddenPhone
   }
    Contact.deleteItem(userContact);
    res.redirect('/');
};