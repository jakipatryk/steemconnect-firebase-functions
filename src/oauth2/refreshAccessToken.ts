import { ClientCredenctials } from './interfaces/ClientCredentials';
import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
import * as rp from 'request-promise';

export async function refreshAccessToken({
  clientId,
  clientSecret,
  refreshToken
}: ClientCredenctials & {
  refreshToken: string;
}): Promise<AccessTokenResponse> {
  try {
    const options = {
      uri: 'https://steemconnect.com/api/oauth2/token',
      form: {
        grant_type: 'refresh_token',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken
      },
      json: true
    };

    const newAccessToken = await rp.post(options);
    return newAccessToken;
  } catch (e) {
    throw e.error;
  }
}
