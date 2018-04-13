import * as rp from 'request-promise';

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
