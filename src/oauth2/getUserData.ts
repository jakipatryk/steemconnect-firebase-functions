import { UserData } from '../interfaces/UserData';

import * as rp from 'request-promise';

/**
 * Gets and returns the user data of the user.
 * @param {string} accessToken The access_token of the user.
 * @returns {Promise} Promise object that resolves into user data object.
 */
export async function getUserData(accessToken: string): Promise<UserData> {
  try {
    const options = {
      uri: 'https://steemconnect.com/api/me',
      headers: {
        Authorization: accessToken
      },
      json: true
    };

    const userData = await rp.get(options);
    return userData;
  } catch (e) {
    throw e.error;
  }
}
