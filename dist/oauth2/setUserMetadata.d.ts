import { UserData } from '../interfaces/UserData';
/**
 * Sets user metadata and returns the user data of this user.
 * @param {string} accessToken The access_token of the user.
 * @param {object} metadata The metadata to set.
 * @returns {Promise} Promise object that resolves into user data object.
 */
export declare function setUserMetadata(accessToken: string, metadata: object): Promise<UserData>;
