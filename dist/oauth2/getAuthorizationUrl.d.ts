import { ClientCredenctials } from './interfaces/ClientCredentials';
export declare function getAuthorizationUrl({clientId, redirectUri, scope, state}: ClientCredenctials & {
    redirectUri: string;
    scope: Array<string>;
    state?: string;
}): string;
