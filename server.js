const mongoose = require('mongoose');

///////////////////////////////////////////////

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require("./app");

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


const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening at port: 4000, on this device`);
})