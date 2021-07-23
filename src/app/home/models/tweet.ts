export interface Tweet {
  id?: string;
  tweetMessage: string;
  authorId?: string;
  author?: string;
  likes?: number;
  comments?: number;
  retweets?: number;
  quotes?: number;
}
