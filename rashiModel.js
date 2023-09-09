const mongoose = require('mongoose');
const slugify = require('slugify');

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
  description: String,
  slug: String
})


// Mongoose Document Middleware
// pre

rashiSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });

  next();
})



const Rashi = mongoose.model('Rashi', rashiSchema);

module.exports = Rashi;
