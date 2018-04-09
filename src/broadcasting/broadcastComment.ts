import { createBroadcastableComment } from '../shared/helpers/createBroadcastable';
import { Comment } from './interfaces/Comment';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';

export const broadcastComment = ({
  parentPermlink,
  commentAuthor,
  commentPermlink,
  commentBody,
  parentAuthor = '',
  commentTitle = '',
  commentMetadata
}: Comment) => ({ access_token }: AccessTokenResponse): BroadcastResult =>
  createBroadcastableComment({
    parent_permlink: parentPermlink,
    author: commentAuthor,
    permlink: commentPermlink,
    body: commentBody,
    parent_author: parentAuthor,
    title: commentTitle,
    json_metadata: JSON.stringify(commentMetadata)
  })({ access_token });
