import faker from 'faker';
import mongoose from 'mongoose';
import { tweetModel } from '../src/models/tweetModel';
import logger from '../src/util/logger';
import { connectMongoDB } from '../src/util/mongodb';

const seedPromises = Array.from(Array(100)).map(x => {
  const fakeTweet =
  {
    displayName: faker.name.firstName(),
    userName: faker.internet.userName(),
    verified: faker.datatype.boolean(),
    text: faker.lorem.paragraph(),
    likes: faker.datatype.number(),
    retweets: faker.datatype.number(),
    avatar: faker.image.avatar(),
    date: faker.date.recent(),
  };
  const tweet = new tweetModel(fakeTweet);
  return tweet.save();
});

const seed = async () => {
  try {
    await connectMongoDB();
    await Promise.all(seedPromises);
    logger.info('success');
    await mongoose.connection.close();
  } catch (error) {
    logger.error('seed failed.', error);
  }
}

seed();
