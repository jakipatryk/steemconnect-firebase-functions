import { createBroadcastableComment } from '../shared/helpers/createBroadcastable';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Post } from './interfaces/Post';

export const broadcastPost = ({
  mainTag,
  permlink,
  title,
  body,
  metadata
}: Post) => ({
  access_token,
  username
}: AccessTokenResponse): Promise<BroadcastResult> =>
  createBroadcastableComment({
    parent_permlink: mainTag,
    author: username,
    permlink: permlink,
    body: body,
    parent_author: '',
    title: title,
    json_metadata: JSON.stringify(metadata)
  })({ access_token });
