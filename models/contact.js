const fs = require('fs');
const path = require('path');

// path to the contact.json
const pathToFile = path.join(path.dirname(require.main.filename), 'data', 'contact.json'); //process on app. main on entry point.

module.exports = class Contact {
    constructor(contact) {
        this.contact = contact;
    }

    saveContact() {
        fs.readFile(pathToFile, (error, fileContent) => {
            let contacts = []; //kui mahalugemine õnnestub siis sisu läheb siia massiivi

            if (!error) {
                contacts = JSON.parse(fileContent);
            }
            else {
                console.log(error);
            }
            contacts.push(this);

            fs.writeFile(pathToFile, JSON.stringify(contacts), (error) => {
                console.log('Error', error);
            });
        });
    }
    static fetchContacts(callBack) { //meetod mida me kutsume klassi peale on static
        fs.readFile(pathToFile, (error, fileContent) => {
            if (error) {
                callBack([]);
            };

            callBack(JSON.parse(fileContent));

        });
    }
    static deleteItem(contact) {
        // get data from the json file
        fs.readFile(pathToFile, (error, fileContent) => {
            let contacts = [];
            if (!error) {
                contacts = JSON.parse(fileContent);
            }
            //delete an item from the tas arrays
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].contact.name === contact.name && contacts[i].contact.phone === contact.phone ) {
                    // delete element from the array
                    contacts.splice(i, 1);
                    break;
                }
            }
            fs.writeFile(pathToFile, JSON.stringify(contacts), (error) =>{
                console.log(error);
            });
        });
    }
}