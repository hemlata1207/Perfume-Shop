const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
// Get reviews for a product
router.get('/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Add a review
router.post('/', async (req, res) => {
  try {
    const { productId, username, rating, comment } = req.body;
    const review = new Review({ productId, username, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;