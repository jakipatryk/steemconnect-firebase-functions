import { UserData } from '../interfaces/UserData';
/**
 * Gets and returns the user data of the user.
 * @param {string} accessToken The access_token of the user.
 * @returns {Promise} Promise object that resolves into user data object.
 */
export declare function getUserData(accessToken: string): Promise<UserData>;
