export async function mintFirebaseToken(
  admin: any,
  uid: string
): Promise<string> {
  const firebaseToken = await admin.auth().createCustomToken(uid);
  return firebaseToken;
}
