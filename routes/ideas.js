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
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.json({ success: true, data: idea });
});

// Create idea
router.post('/', (req, res) => {
  const idea = {
    idea: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });
  console.log(ideas);
});

// Update Idea
router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    res.status(404).json({ success: false, error: 'Resource not found' });
  } else {
    idea.text = req.body.text || idea.text;
    idea.tag = req.body.tag || idea.tag;
    res.json({ success: true, data: idea });
  }
});

// Delete Ideas
router.delete('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === parseInt(req.params.id));

  if (!idea) {
    res.status(404).json({ success: false, error: 'Resource not found!' });
  } else {
    const index = ideas.indexOf(idea);
    ideas.splice(index, 1);

    res.json({ success: true, data: {} });
  }
});
module.exports = router;
