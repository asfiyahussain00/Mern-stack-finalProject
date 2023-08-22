
const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  BrandName: {
    type: String,
    required: true,
    unique: true
  },
  BrandImage: {
    type: String,
    required: true
  }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
