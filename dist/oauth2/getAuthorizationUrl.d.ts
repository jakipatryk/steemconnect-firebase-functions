export declare function getAuthorizationUrl({clientId, redirectUri, scope, state}: {
    clientId: string;
    redirectUri: string;
    scope: Array<string>;
    state?: string;
}): string;
