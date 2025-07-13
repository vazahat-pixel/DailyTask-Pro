const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.js');

// Get all todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// post a new todo
router.post('/', async (req, res) => {
    const todo = new Todo({title: req.body.title});
    const saved = await todo.save();
    res.json(saved);

});

// // PUT update todo
router.put('/:id', async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, {
    title: req.body.title
  }, { new: true });
  res.json(updated);
});

// DELETE a todo
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;



