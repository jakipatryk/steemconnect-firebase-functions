import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import * as rp from 'request-promise';

export async function revokeAccessToken({ access_token }: AccessTokenResponse) {
  try {
    const options = {
      uri: 'https://steemconnect.com/api/oauth2/token/revoke',
      headers: {
        Authorization: access_token,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      json: true
    };

    const result = await rp.post(options);
    return result;
  } catch (e) {
    throw e.error;
  }
}
