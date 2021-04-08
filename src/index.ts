import express from 'express';
import cors from 'cors';
import { fetchAllTweets } from './models/tweet';
import { connectMongoDB } from './util/mongodb';

const app = express();
app.use(cors());
const port = 3000;

app.get('/tweets', async (req, res) => {
  const tweets = await fetchAllTweets();
  res.json(tweets);
});

app.listen(port, async () => {
  await connectMongoDB();
  return console.log(`server is listening on ${port}`);
});
