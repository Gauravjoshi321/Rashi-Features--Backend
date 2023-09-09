const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Rashi = require('./../rashiModel');

dotenv.config({ path: './config.env' });


// CONNECT TO ATLAS

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true
}).then(con => {
  console.log("CONNECTION SUCCESSFULL !");
})

// READ FILE
const rashi = JSON.parse(fs.readFileSync(`${__dirname}/rashi.json`));


// IMPORT DATA TO THE DATABASE
const importData = async () => {
  try {
    await Rashi.create(rashi);
    console.log("Data imported successfully");
  }
  catch (err) {
    console.log(err);
  }
  process.exit();
}

// DELETE DATA FROM THE DATABASE
const deleteTours = async () => {
  try {
    await Rashi.deleteMany();
    console.log("Data deleted successfully");
  }
  catch (err) {
    console.log(err);
  }
  process.exit();
}



if (process.argv[2] === '--import') {
  importData();
}
else if (process.argv[2] === '--delete') {
  deleteTours();
}


// node Rashi-data/dev-dataImport.js --delete
// node Rashi-data/dev-dataImport.js --import
