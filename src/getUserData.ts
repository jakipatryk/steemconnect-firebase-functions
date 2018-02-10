import * as rp from 'request-promise';

export async function getUserData(accessToken: string) {
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
