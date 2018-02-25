import { AccessTokenResponse } from './interfaces/AccessTokenResponse';
export declare function getAccessToken(clientId: string, clientSecret: string, redirectUri: string, code: string): Promise<AccessTokenResponse>;
