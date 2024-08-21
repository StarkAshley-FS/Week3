const {Star} = require('../models');

// Show all resources
const index = async (req, res) => {
  try {
    const stars = await Star.findAll();
    res.status(200).json(stars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Show resource
const show = async (req, res) => {
  try {
    const star = await Star.findByPk(req.params.id);
    if (star) {
      res.status(200).json(star);
    } else {
      res.status(404).json({ error: 'Star not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new resource
const create = async (req, res) => {
  try {
    const { name, size, description, galaxyId } = req.body;

    if (!name || !size || !description || !galaxyId) {
      return res.status(400).json({
        success: false,
        message: 'Name, size, description, and galaxyId are required fields.'
      });
    }
    const starData = await Star.create({ name, size, description, galaxyId });
    res.status(201).json({
      data: starData,
      success: true,
      message: 'Star created successfully.',
    });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      console.error('Validation Error!', error);
      res.status(422).json({
        success: false,
        message: 'Validation error.',
        details: error.errors,
      });
    } else {
      console.error('Error creating star:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating star.',
      });
    }
  }
};

// Update an existing resource
const update = async (req, res) => {
  try {
    const star = await Star.findByPk(req.params.id);
    if (star) {
      await star.update(req.body);
      res.status(200).json(star);
    } else {
      res.status(404).json({ error: 'Star not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a single resource
const remove = async (req, res) => {
  try {
    const star = await Star.findByPk(req.params.id);
    if (star) {
      await star.destroy();
      res.status(204).json(true);
    } else {
      res.status(404).json({ error: 'Star not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export all controller actions
module.exports = { index, show, create, update, remove }
