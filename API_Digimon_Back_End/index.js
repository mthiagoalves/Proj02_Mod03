const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./src/routes/router');

const port = 5005;

app.use(express.json());
app.use(cors());
app.use('/digimons', router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
