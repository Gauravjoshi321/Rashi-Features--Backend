const mongoose = require('mongoose');

const rashiSchema = new mongoose.Schema({

  name: String,
  image: [String],
  nameLetter: [String],
  positives: { Object },
  negatives: { Object },
  startDate: Date,
  endDate: Date,
  description: String
})

const Rashi = mongoose.model('Rashi', rashiSchema);

module.exports = Rashi;
