import * as qs from 'querystring';
import * as rp from 'request-promise';

export const getAuthorizationUrl = (
  clientId: string,
  redirectUri: string,
  scope: Array<string>
): string => {
  const base = 'https://steemconnect.com/oauth2/authorize?';
  const queryParams = {
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope: scope.join(',')
  };

  const endpoint = base + qs.stringify(queryParams);
  return endpoint;
};

export const getAccessToken = async (
  clientId: string,
  clientSecret: string,
  redirectUri: string,
  code: string
): Promise<any> => {
  try {
    const options = {
      uri: 'https://steemconnect.com/api/oauth2/token',
      form: {
        grant_type: 'authorization_code',
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code: code
      },
      json: true
    };

    const accessToken = await rp.post(options);
    return accessToken;
  } catch (e) {
    throw e.error;
  }
};

export const mintFirebaseToken = async (
  admin: any,
  uid: string
): Promise<string> => {
  const firebaseToken = await admin.auth().createCustomToken(uid);
  return firebaseToken;
};

export const saveAccessToken = async (
  admin: any,
  uid: string,
  accessToken: any
) => {
  const tokenDetails = Object.assign({}, accessToken);
  return admin
    .firestore()
    .doc(`steemconnectToken/${uid}`)
    .set(tokenDetails, { merge: true });
};

export const getAccessTokenFromFirestore = async (admin: any, uid: string) => {
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
};
