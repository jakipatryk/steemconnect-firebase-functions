import { AccessToken } from './interfaces/AccessToken';

export async function saveAccessToken(
  admin: any,
  uid: string,
  accessToken: AccessToken
) {
  const tokenDetails = Object.assign({}, accessToken);
  return admin
    .firestore()
    .doc(`steemconnectToken/${uid}`)
    .set(tokenDetails, { merge: true });
}
