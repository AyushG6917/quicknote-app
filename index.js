const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('notes.json', 'utf8'));
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const note = req.body.note;
  const notes = JSON.parse(fs.readFileSync('notes.json', 'utf8'));
  notes.push(note);
  fs.writeFileSync('notes.json', JSON.stringify(notes));
  res.status(201).send();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`);
});
