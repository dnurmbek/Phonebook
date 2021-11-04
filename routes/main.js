const express = require('express');
const contactController = require('../controllers/mainController');
const router = express.Router({mergeParams: true}); // siia router objekti salvestatakse kõik route'd mida kasutatakse
//kui server failis päringuid haldas 'app' siis siin haldab router


router.get('/', contactController.getMainPage); //meetodile sulge ei pane selleks et ta ootaks päringut kaldkriipsule
//ning ei paneks kohe seda meetodit käima. paneb ise käima siis kui pring kaldkriipsule on tulmud.

router.post('/', contactController.postNewContact);

router.post('/delete', contactController.deleteContact);

module.exports=router;

//lisa projektile uus route nimega shoppinglist
//lisa projektile ka kontroller shoppingList routeri jaoks
// kuupäeva asemeel kirjutatud shoppingList

