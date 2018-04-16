import { FirebaseAccount } from './interfaces/FirebaseAccount';

export async function createFirebaseAccount(
  admin: any,
  {
    uid,
    username,
    photoURL,
    email,
    emailVerified,
    phoneNumber,
    disabled
  }: FirebaseAccount
): Promise<any> {
  try {
    return await admin.auth().updateUser(uid, {
      displayName: username,
      photoURL,
      email,
      emailVerified,
      phoneNumber,
      disabled
    });
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      return await admin.auth().createUser({
        uid: uid,
        displayName: username,
        photoURL,
        email,
        emailVerified,
        phoneNumber,
        disabled
      });
    }
    throw error;
  }
}
