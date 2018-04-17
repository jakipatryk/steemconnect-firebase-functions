import * as qs from 'querystring';
import { ClientCredenctials } from './interfaces/ClientCredentials';
import { Scope } from './interfaces/Scope';

export function getAuthorizationUrl({
  clientId,
  redirectUri,
  scope,
  state = ''
}: ClientCredenctials & {
  redirectUri: string;
  scope: Array<Scope>;
  state?: string;
}): string {
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
