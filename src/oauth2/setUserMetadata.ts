import * as rp from 'request-promise';
import { UserData } from '../shared/interfaces/UserData';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';

export async function setUserMetadata({
  access_token,
  metadata
}: AccessTokenResponse & {
  metadata: object;
}): Promise<UserData> {
  const metadataClone = Object.assign({}, metadata);
  const userMetadata = {
    user_metadata: metadataClone
  };
  const options = {
    uri: 'https://steemconnect.com/api/me',
    headers: {
      Authorization: access_token
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
