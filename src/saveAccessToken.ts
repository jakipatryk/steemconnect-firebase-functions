export async function saveAccessToken(
  admin: any,
  uid: string,
  accessToken: any
) {
  const tokenDetails = Object.assign({}, accessToken);
  return admin
    .firestore()
    .doc(`steemconnectToken/${uid}`)
    .set(tokenDetails, { merge: true });
}
