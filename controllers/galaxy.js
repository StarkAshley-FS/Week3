const {Galaxy} = require ('../models');

// Show all resources
const index = async (req, res) => {
  try {
    const galaxies = await Galaxy.findAll();
    res.status(200).json(galaxies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Show resource
const show = async (req, res) => {
  try {
    const galaxy = await Galaxy.findByPk(req.params.id);
    if (galaxy) {
      res.status(200).json(galaxy);
    } else {
      res.status(404).json({ error: 'Galaxy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new resource
const create = async (req, res) => {
  try {
    const { name, size, description } = req.body;
    if (!name || !size || !description) {
      return res.status(400).json({
        success: false,
        message: 'Name, size, and description are required fields.'
      });
    }

    const galaxyData = await Galaxy.create({ name, size, description });
    res.status(201).json({
      data: galaxyData,
      success: true,
      message: 'Galaxy created successfully.',
    });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      console.error('Validation Error!', error);
      res.status(422).json({
        success: false,
        message: 'Validation error.',
        details: error.errors.map(e => e.message),
      });
    } else {
      console.error('Error creating galaxy:', error);
      res.status(500).json({
        success: false,
        message: 'Error creating galaxy.',
      });
    }
  }
};


// Update an existing resource
const update = async (req, res) => {
  try {
    const galaxy = await Galaxy.findByPk(req.params.id);
    if (galaxy) {
      const updatedGalaxy = await galaxy.update(req.body);
      res.json(updatedGalaxy);
    } else {
      res.status(404).json({ message: 'Galaxy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Remove a single resource
const remove = async (req, res) => {
  try {
    const galaxy = await Galaxy.findByPk(req.params.id);
    if (galaxy) {
      await galaxy.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Galaxy not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export all controller actions
module.exports = { index, show, create, update, remove }
