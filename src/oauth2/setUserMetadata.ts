import { UserData } from '../interfaces/UserData';

import * as rp from 'request-promise';

/**
 * Sets user metadata and returns the user data of this user.
 * @param {string} accessToken The access_token of the user.
 * @param {object} metadata The metadata to set.
 * @returns {Promise} Promise object that resolves into user data object.
 */
export async function setUserMetadata(
  accessToken: string,
  metadata: object
): Promise<UserData> {
  const metadataClone = Object.assign({}, metadata);
  const userMetadata = {
    user_metadata: metadataClone
  };
  const options = {
    uri: 'https://steemconnect.com/api/me',
    headers: {
      Authorization: accessToken
    },
    body: userMetadata,
    json: true
  };

  try {
    const userData = await rp.put(options);
    return userData;
  } catch (e) {
    throw e.error;
  }
}
