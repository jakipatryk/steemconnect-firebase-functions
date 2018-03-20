import * as rp from 'request-promise';

/**
 * Revokes given access token.
 * @param {string} accessToken The access token to revoke.
 * @returns {Promise} Promise object that resolves into the result of revoking token.
 */
export async function revokeAccessToken(accessToken: string) {
  try {
    const options = {
      uri: 'https://steemconnect.com/api/oauth2/token/revoke',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      json: true
    };

    const result = await rp.delete(options);
    return result;
  } catch (e) {
    throw e.error;
  }
}
