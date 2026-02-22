const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Shubham 🚀 DevOps CI/CD Running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
