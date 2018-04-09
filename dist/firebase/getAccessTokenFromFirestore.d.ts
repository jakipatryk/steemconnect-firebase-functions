import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
/**
 * Gets and returns the access token + details object from the Firestore.
 * @param admin The configurated firebase-admin object.
 * @param {string} uid The uid of the user you want to get access token for.
 * @returns {Promise} Promise object that resolves into the access token + its details object.
 */
export declare function getAccessTokenFromFirestore(admin: any, uid: string): Promise<AccessTokenResponse>;
