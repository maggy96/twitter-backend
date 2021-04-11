import express from 'express';
import cors from 'cors';
import { fetchAllTweets, tweetModel } from './models/tweetModel';
import { connectMongoDB } from './util/mongodb';
import logger from './util/logger';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get('/tweets', async (req, res) => {
  const tweets = await fetchAllTweets();
  res.json(tweets.reverse());
});

app.post('/tweet', async (req, res) => {
  const data = req.body;
  const tweet = new tweetModel(data);
  await tweet.save();
  res.json({ status: 'ok' });
});

app.listen(port, async () => {
  await connectMongoDB();
  return console.log(`server is listening on ${port}`);
});
