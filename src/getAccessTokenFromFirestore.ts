import { AccessToken } from './interfaces/AccessToken';

export async function getAccessTokenFromFirestore(
  admin: any,
  uid: string
): Promise<AccessToken> {
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
