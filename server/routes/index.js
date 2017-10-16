const express = require('express');
const router = express.Router();

const wrisxsService = require('../wrisx-service');

router.get('/wrisxs', (req, res) => {
    wrisxsService.get(req, res);
});

router.put('/wrisx', (req, res) => {
    wrisxsService.create(req, res);
});

router.post('/wrisx', (req, res) => {
    wrisxsService.update(req, res);
});

router.delete('/wrisx/:id', (req, res) => {
    wrisxsService.destroy(req, res);
});

module.exports = router;