import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({
    nlw: 'e-sport',
  });
});

app.listen(3333);
