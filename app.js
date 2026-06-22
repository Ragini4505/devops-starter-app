const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the DevOps Starter App!' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/greet', (req, res) => {
  const name = req.query.name || 'there';
  res.json({ message: `Hello, ${name}!` });
});

module.exports = app;