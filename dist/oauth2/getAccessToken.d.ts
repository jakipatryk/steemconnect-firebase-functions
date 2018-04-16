import { ClientCredenctials } from './interfaces/ClientCredentials';
import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
export declare function getAccessToken({clientId, clientSecret, redirectUri, code}: ClientCredenctials & {
    redirectUri: string;
    code: string;
}): Promise<AccessTokenResponse>;
