import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Post } from './interfaces/Post';
export declare const broadcastPost: ({ mainTag, permlink, title, body, metadata }: Post) => ({ access_token, username }: AccessTokenResponse) => Promise<BroadcastResult>;
