import { AccessTokenResponse } from './interfaces/AccessTokenResponse';

import * as rp from 'request-promise';

/**
 * Exchanges the refresh token for the new access token and its details (username, expiration time and refresh token) and returns them.
 * @param {string} clientId The client id of the SteemConnect app.
 * @param {string} clientSecret The client secret of the SteemConnect app.
 * @param {string} refreshToken The refresh_token of the user you want to get new access token for.
 * @returns {Promise} Promise object that resolves into the new access token + its details object.
 */
export async function refreshAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<AccessTokenResponse> {
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
