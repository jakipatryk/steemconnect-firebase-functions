import { AccessToken } from './interfaces/AccessToken';
export declare function getAccessToken(clientId: string, clientSecret: string, redirectUri: string, code: string): Promise<AccessToken>;
