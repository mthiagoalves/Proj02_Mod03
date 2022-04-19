const router = require('express').Router();

const digiController = require('../controllers/controller');

router.get('/find-digimons', digiController.findAllDigimonsController);
router.get('/digimon/', digiController.findDigiIdControler);
router.post('/digi-create', digiController.digiCreateController);
router.put('/digi-update/:id', digiController.digiUpdateController);
router.delete('/delete/:id', digiController.degiDeleteController);

module.exports = router;
