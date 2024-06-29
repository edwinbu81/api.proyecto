const { Router } = require('express');
const router = Router();

const mueble = require('../items.json');


router.get('/', (req, res) => {
    res.json(mueble);
});

module.exports = router;