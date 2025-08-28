const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  username: String,
  rating: Number,
  comment: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Review', reviewSchema);