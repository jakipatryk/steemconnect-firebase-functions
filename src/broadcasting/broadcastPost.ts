import { createBroadcastableComment } from '../shared/helpers/createBroadcastable';
import { Post } from './interfaces/Post';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';

export const broadcastPost = ({
  mainTag,
  author,
  permlink,
  title,
  body,
  metadata
}: Post) => ({ access_token }: AccessTokenResponse): BroadcastResult =>
  createBroadcastableComment({
    parent_permlink: mainTag,
    author: author,
    permlink: permlink,
    body: body,
    parent_author: '',
    title: title,
    json_metadata: JSON.stringify(metadata)
  })({ access_token });
