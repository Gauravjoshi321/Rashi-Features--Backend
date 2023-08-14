const mongoose = require('mongoose');

const rashiSchema = new mongoose.Schema({

  name: String,
  image: [String],
  nameLetter: [String],
  specialQuality: String,
  positives: {
    // type: String,
    1: String,
    2: String,
    3: String,
    4: String,
    5: String,
  },
  negatives: {
    // type: String,
    1: String,
    2: String,
    3: String,
    4: String,
    5: String,
  },
  startDate: Date,
  endDate: Date,
  description: String
})

const Rashi = mongoose.model('Rashi', rashiSchema);

module.exports = Rashi;
