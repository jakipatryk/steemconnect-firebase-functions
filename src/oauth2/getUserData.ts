import * as rp from 'request-promise';
import { UserData } from '../shared/interfaces/UserData';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';

export async function getUserData(
  access_token: AccessTokenResponse
): Promise<UserData> {
  try {
    const options = {
      uri: 'https://steemconnect.com/api/me',
      headers: {
        Authorization: access_token
      },
      json: true
    };

    const userData = await rp.get(options);
    return userData;
  } catch (e) {
    throw e.error;
  }
}
