import { AccessTokenResponse } from './interfaces/AccessTokenResponse';
export declare function refreshAccessToken(clientId: string, clientSecret: string, refreshToken: string): Promise<AccessTokenResponse>;
