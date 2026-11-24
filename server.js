const path = require('node:path');
const express = require('express');
const helmet = require('helmet');

const app = express();
const port = Number(process.env.PORT) || 3000;
const publicDirectory = path.join(__dirname, 'public');

app.use(helmet());
app.use(express.static(publicDirectory));

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
