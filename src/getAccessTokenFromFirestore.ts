import { AccessTokenResponse } from './interfaces/AccessTokenResponse';

/**
 * Gets and returns the access token + details object from the Firestore.
 * @param admin The configurated firebase-admin object.
 * @param {string} uid The uid of the user you want to get access token for.
 * @returns {Promise} Promise object that resolves into the access token + its details object.
 */
export async function getAccessTokenFromFirestore(
  admin: any,
  uid: string
): Promise<AccessTokenResponse> {
  try {
    const doc = await admin
      .firestore()
      .doc(`steemconnectToken/${uid}`)
      .get();

    if (!doc.exists) {
      throw new Error('No such document!');
    } else {
      return doc.data();
    }
  } catch (err) {
    throw new Error(`Error getting token: ${err}`);
  }
}
