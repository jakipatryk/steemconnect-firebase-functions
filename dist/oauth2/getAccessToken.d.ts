import { ClientCredentials } from './interfaces/ClientCredentials';
import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
export declare function getAccessToken({clientId, clientSecret, redirectUri, code}: ClientCredentials & {
    redirectUri: string;
    code: string;
}): Promise<AccessTokenResponse>;
