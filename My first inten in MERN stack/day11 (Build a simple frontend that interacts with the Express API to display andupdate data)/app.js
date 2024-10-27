const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let data = [
  { id: 1, name: 'Item 1', description: 'This is item 1' },
  { id: 2, name: 'Item 2', description: 'This is item 2' },
];

// Get all items
app.get('/api/items', (req, res) => {
  res.json(data);
});

// Update an item
app.put('/api/items/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  
  const item = data.find(item => item.id === parseInt(id));
  if (item) {
    item.name = name;
    item.description = description;
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
