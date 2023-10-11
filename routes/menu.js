const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/vicem', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','vicem.html'));

});

router.get('/vice', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','vice.html'));

});

router.get('/provost', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','provost.html'));

});

router.get('/proctor', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','proctor.html'));

});

router.get('/oric', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','oric.html'));

});

router.get('/directorate', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','directorate.html'));

});

router.get('/chief', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','chief.html'));

});

router.get('/administration', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','administration.html'));

});

router.get('/exam', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','exam.html'));

});

router.get('/about', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','about.html'));

});

router.get('/history', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','history.html'));

});

router.get('/quaidwill', (req, res, next )=>{
 
    res.sendFile(path.join(__dirname, '../', 'views','/quaid.html'));

});

router.get('/', (req, res, next) => {

    res.sendFile(path.join(__dirname,'../', 'views','index.html'))
});

module.exports = router;
