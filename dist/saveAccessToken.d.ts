import { AccessTokenResponse } from './interfaces/AccessTokenResponse';
/**
 * Saves access token and its details in the Firestore.
 * @param admin The configurated firebase-admin object.
 * @param {string} uid The uid of the user.
 * @param {Object} accessToken The access token + its details object.
 * @returns {Promise} Promise object.
 */
export declare function saveAccessToken(admin: any, uid: string, accessToken: AccessTokenResponse): Promise<any>;
