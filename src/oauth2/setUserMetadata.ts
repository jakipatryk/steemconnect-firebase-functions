import { UserData } from '../shared/interfaces/UserData';
import * as rp from 'request-promise';

export async function setUserMetadata({
  accessToken,
  metadata
}: {
  accessToken: string;
  metadata: object;
}): Promise<UserData> {
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
