const digiServices = require('../services/services');

const findAllDigimonsController = (req, res) => {
  const digimons = digiServices.findDigiServices();

  if (digimons.length == 0) {
    return res.status(404).send({ message: 'Not found more Digimons' });
  }

  res.send(digimons);
};

const findDigiIdControler = (req, res) => {
  const digiId = Number(req.params.id);

  if (!digiId) {
    return res.status(400).send({ message: 'digiId invalid' });
  }

  const chosenDigimon = digiServices.findDigiIdServices();

  if (!chosenDigimon) {
    return res.status(404).send({ message: 'digiId not found' });
  }

  res.send(chosenDigimon);
};

const digiCreateController = (req, res) => {
  const digimon = req.doby;

  if (!digimon || !digimon.name || !digimon.img || !digimon.level) {
    return res.status(400).send({ message: 'Send all info the Digimon' });
  }

  const newDigimon = digiServices.digiCreateController(digimon);

  res.status(201).send(newDigimon);
};

const digiUpdateController = (req, res) => {
  const digiId = Number(req.params.id);

  if (!digiId) {
    return res.status(400).send({ message: 'Id invalid' });
  }

  const editDigimon = req.body;

  if (
    !editDigimon ||
    !editDigimon.name ||
    !editDigimon.img ||
    !editDigimon.level
  ) {
    return res.status(400).send({ message: 'Send all info the Digimon' });
  }

  const digiUpdate = digiServices.digiUpdateController(digiId, editDigimon);

  res.send(digiUpdate);
};

const degiDeleteController = (req, res) => {
  const digiId = Number(req.params.id);

  if (!digiId) {
    return res.status(400).send({ message: 'Id invalid' });
  }

  digiServices.digiUpdateController(digiId);

  res.send({ message: 'Digimon Deleted' });
};

module.exports = {
  findAllDigimonsController,
  findDigiIdControler,
  digiCreateController,
  digiUpdateController,
  degiDeleteController,
};
