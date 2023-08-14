const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Rashi = require('./rashiModel');

///////////////////////////////////////////////

dotenv.config({ path: './config.env' });
const app = express();

////////////////////////////////////////

// const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true
}).then(con => {
  console.log("DB connection is successfull !");
})


app.get('/', async (req, res) => {
  const rashis = await Rashi.find();

  res.status(200).json({
    status: "success",
    size: rashis.length,
    data: {
      rashis
    }
  })
})

app.get('/:Id', async (req, res) => {
  const id = req.params.Id;
  const rashi = await Rashi.findById(id);

  res.status(200).json({
    status: "success",
    data: {
      rashi
    }
  })
})


const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening at port: 4000, on this device`);
})