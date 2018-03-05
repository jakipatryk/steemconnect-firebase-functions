import { AccessTokenResponse } from './interfaces/AccessTokenResponse';

import * as rp from 'request-promise';

/**
 * Exchanges the OAuth2 code for an access token and its details (username, expiration time and optionally refresh token) and returns them.
 * @param {string} clientId The client id of the SteemConnect app.
 * @param {string} clientSecret The client secret of the SteemConnect app.
 * @param {string} redirectUri The redirect URI used in the getAuthorizationUrl function.
 * @param {string} code The OAuth2 code.
 * @returns {Promise} Promise object that resolves into the access token + its details object.
 */
export async function getAccessToken(
  clientId: string,
  clientSecret: string,
  redirectUri: string,
  code: string
): Promise<AccessTokenResponse> {
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
