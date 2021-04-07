import express from 'express';
import { connectMongoDB } from './mongodb';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(port, async () => {
  await connectMongoDB();
  return console.log(`server is listening on ${port}`);
});
