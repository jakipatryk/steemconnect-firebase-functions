export async function getAccessTokenFromFirestore(admin: any, uid: string) {
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
