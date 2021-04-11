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
  avatar: { type: String, required: true },
  displayName: { type: String, required: true },
  likes: { type: Number, required: true },
  retweets: { type: Number, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  userName: { type: String, required: true },
  verified: { type: Boolean, required: true },
});

export const tweetModel = mongoose.model('Tweet', tweetSchema);
export const fetchAllTweets = (): Promise<TweetData[]> => tweetModel.find();
