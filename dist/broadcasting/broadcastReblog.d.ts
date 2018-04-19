import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Reblog } from './interfaces/Reblog';
export declare const broadcastReblog: ({ username, postAuthor, postPermlink }: Reblog) => ({ access_token }: AccessTokenResponse) => Promise<BroadcastResult>;
