const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/exam', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','exam.html'));

});

router.get('/', (req, res, next) => {

    res.sendFile(path.join(__dirname,'../', 'views','index.html'))
});

module.exports = router;
