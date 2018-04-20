import { ClientCredenctials } from './../oauth2/interfaces/ClientCredentials';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
export declare const rely: ({ clientId, clientSecret }: ClientCredenctials) => ({ access_token, refresh_token, username }: Required<AccessTokenResponse>) => (broadcastable: Function) => Promise<BroadcastResult & Partial<AccessTokenResponse>>;
