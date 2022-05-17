const router = require('express').Router();
const { Project, User } = require('../models');

router.get('/', (req, res) => {
    res.send('Hello Yall!');
});

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const projectData = await Project.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });

  module.exports = router;
