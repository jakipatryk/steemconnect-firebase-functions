import { AccessTokenResponse } from './interfaces/AccessTokenResponse';

export async function saveAccessToken(
  admin: any,
  uid: string,
  accessToken: AccessTokenResponse
) {
  const tokenDetails = Object.assign({}, accessToken);
  return admin
    .firestore()
    .doc(`steemconnectToken/${uid}`)
    .set(tokenDetails, { merge: true });
}
