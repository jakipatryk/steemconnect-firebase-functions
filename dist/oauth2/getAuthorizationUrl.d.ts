import { ClientCredentials } from './interfaces/ClientCredentials';
import { Scope } from './interfaces/Scope';
export declare function getAuthorizationUrl({clientId, redirectUri, scope, state}: ClientCredentials & {
    redirectUri: string;
    scope: Array<Scope>;
    state?: string;
}): string;
