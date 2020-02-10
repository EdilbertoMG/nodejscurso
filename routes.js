const express = require('express');
const router = express.Router();

// rutas
router.get('/', (req,res) => {
    res.render('index');
});

router.get('/login', (req,res) => {
    res.render('login');
});

module.exports = router;