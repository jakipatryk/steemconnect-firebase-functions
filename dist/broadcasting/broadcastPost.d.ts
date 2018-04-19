import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Post } from './interfaces/Post';
export declare const broadcastPost: ({ mainTag, author, permlink, title, body, metadata }: Post) => ({ access_token }: AccessTokenResponse) => Promise<BroadcastResult>;
