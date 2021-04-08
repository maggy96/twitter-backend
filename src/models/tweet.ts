import mongoose from 'mongoose';
const { Schema } = mongoose;

export type TweetData = {
  avatar: string;
  displayName: string;
  likes: number;
  retweets: number;
  text: string;
  date: Date;
  userName: string;
  verified: boolean;
}

const tweetSchema = new Schema({
  avatar: String,
  displayName: String,
  likes: Number,
  retweets: Number,
  text: String,
  date: { type: Date, default: Date.now },
  userName: String,
  verified: Boolean,
});

export const tweetModel = mongoose.model('Tweet', tweetSchema);
export const fetchAllTweets = (): Promise<TweetData[] | undefined> => tweetModel.find();
