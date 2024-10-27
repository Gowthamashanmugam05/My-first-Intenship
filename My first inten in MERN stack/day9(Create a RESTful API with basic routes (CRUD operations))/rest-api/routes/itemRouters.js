const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// @route   POST /api/items
// @desc    Create a new item
router.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/items
// @desc    Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/items/:id
// @desc    Get a single item by ID
router.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/items/:id
// @desc    Update an item by ID
router.put('/items/:id', async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Item not found' });

    item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/items/:id
// @desc    Delete an item by ID
router.delete('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Item not found' });

    await item.remove();
    res.json({ msg: 'Item removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
