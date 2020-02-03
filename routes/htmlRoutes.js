const express = require('express');
const router = express.Router();
const path = require('path');

//Route to our index.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/index.html'))
})

//Route to about.html file
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/about.html'))
})




module.exports = router;