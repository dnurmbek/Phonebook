const express  = require('express');
const myRouter = express.Router();


myRouter.get('*', (req, res)=>{
    res.send('404 Not found')
    
})

module.exports = myRouter;