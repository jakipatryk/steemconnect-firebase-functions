import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
import { Operations } from '../shared/interfaces/Operation';
import { BroadcastResult } from './interfaces/BroadcastResult';
export declare function broadcastOperations([...operations]: Operations): ({ access_token }: AccessTokenResponse) => Promise<BroadcastResult>;
