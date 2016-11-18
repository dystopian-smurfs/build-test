import express from 'express';

const app = express();
  
app.get('/', (req, res) => {
  res.send('working');
});

app.get('/resource', (req, res) => {
  res.sendStatus(200);
});

app.listen(8090);

export default app;
