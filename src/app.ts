import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Backend Running');
});

export default app;