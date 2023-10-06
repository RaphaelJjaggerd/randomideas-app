const express = require('express');
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a news letter that only shares positive, uplfifting news',
    tag: ' Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk carotns that turn a different color the older te milk gets.',
    tag: ' Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: ' Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

// Get all Ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get Single Idea.
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.json({ success: true, data: idea });
});

module.exports = router;
