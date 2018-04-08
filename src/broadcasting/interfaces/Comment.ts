export interface Comment {
  parentAuthor?: string;
  parentPermlink: string;
  commentAuthor: string;
  commentPermlink: string;
  commentBody: string;
  commentTitle?: string;
  commentMetadata?: object | string;
}
