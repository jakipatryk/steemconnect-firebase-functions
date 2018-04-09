import { Post } from './interfaces/Post';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
export declare const broadcastPost: ({ mainTag, author, permlink, title, body, metadata }: Post) => ({ access_token }: AccessTokenResponse) => BroadcastResult;
