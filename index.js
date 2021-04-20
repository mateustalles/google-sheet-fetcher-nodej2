require('dotenv').config();

const express = require('express');
const cors = require('cors');
const rescue = require('express-rescue');
const stf = require('./routers/stf');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/stf', stf);

app.use((err, req, res, _next) => {
  const { message } = err;
  res.status(500).send({ error: { message, code: 500 } });
});

app.listen(3000, () => console.log(`Listening on ${process.env.PORT}`));
