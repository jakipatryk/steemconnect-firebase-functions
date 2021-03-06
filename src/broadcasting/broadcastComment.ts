import { createBroadcastableComment } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Comment } from './interfaces/Comment';

export const broadcastComment = ({
  parentPermlink,
  commentPermlink,
  commentBody,
  parentAuthor = '',
  commentTitle = '',
  commentMetadata
}: Comment) => ({
  access_token,
  username
}: AccessTokenResponse): Promise<BroadcastResult> =>
  createBroadcastableComment({
    parent_permlink: parentPermlink,
    author: username,
    permlink: commentPermlink,
    body: commentBody,
    parent_author: parentAuthor,
    title: commentTitle,
    json_metadata: JSON.stringify(commentMetadata)
  })({ access_token });
