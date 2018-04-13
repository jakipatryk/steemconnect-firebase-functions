import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
export declare function getAccessToken({clientId, clientSecret, redirectUri, code}: {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    code: string;
}): Promise<AccessTokenResponse>;
