import { ClientCredenctials } from './interfaces/ClientCredentials';
import * as qs from 'querystring';

export function getAuthorizationUrl({
  clientId,
  redirectUri,
  scope,
  state
}: ClientCredenctials & {
  redirectUri: string;
  scope: Array<string>;
  state?: string;
}): string {
  const base = 'https://steemconnect.com/oauth2/authorize?';
  const queryParams = {
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope: scope.join(','),
    state: state || null
  };
  const endpoint = base + qs.stringify(queryParams);
  return endpoint;
}
