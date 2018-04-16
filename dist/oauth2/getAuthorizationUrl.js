"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs = require("querystring");
function getAuthorizationUrl({ clientId, redirectUri, scope, state = '' }) {
    const base = 'https://steemconnect.com/oauth2/authorize?';
    const queryParams = {
        client_id: clientId,
        response_type: 'code',
        redirect_uri: redirectUri,
        scope: scope.join(','),
        state
    };
    const endpoint = base + qs.stringify(queryParams);
    return endpoint;
}
exports.getAuthorizationUrl = getAuthorizationUrl;
