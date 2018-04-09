export interface Post {
  mainTag: string;
  author: string;
  permlink: string;
  title: string;
  body: string;
  metadata?: object | string;
}
