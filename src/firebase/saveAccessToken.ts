import { AccessTokenResponse } from '../interfaces/AccessTokenResponse';

/**
 * Saves access token and its details in the Firestore.
 * @param admin The configurated firebase-admin object.
 * @param {string} uid The uid of the user.
 * @param {Object} accessToken The access token + its details object.
 * @returns {Promise} Promise object.
 */
export async function saveAccessToken(
  admin: any,
  uid: string,
  accessToken: AccessTokenResponse
): Promise<any> {
  const tokenDetails = Object.assign({}, accessToken);
  return admin
    .firestore()
    .doc(`steemconnectToken/${uid}`)
    .set(tokenDetails, { merge: true });
}
