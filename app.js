import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const msg = 'Works on my machine.';
  res.send(msg);
});

export default app;
