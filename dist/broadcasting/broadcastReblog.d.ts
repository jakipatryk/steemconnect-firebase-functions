import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Reblog } from './interfaces/Reblog';
export declare const broadcastReblog: ({ postAuthor, postPermlink }: Reblog) => ({ access_token, username }: AccessTokenResponse) => Promise<BroadcastResult>;
