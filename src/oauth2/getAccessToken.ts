import { ClientCredentials } from './interfaces/ClientCredentials';
import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';

import * as rp from 'request-promise';

export async function getAccessToken({
  clientId,
  clientSecret,
  redirectUri,
  code
}: Required<ClientCredentials> & {
  redirectUri: string;
  code: string;
}): Promise<AccessTokenResponse> {
  try {
    const options = {
      uri: 'https://steemconnect.com/api/oauth2/token',
      form: {
        grant_type: 'authorization_code',
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code: code
      },
      json: true
    };

    const accessToken = await rp.post(options);
    return accessToken;
  } catch (e) {
    throw e.error;
  }
}
