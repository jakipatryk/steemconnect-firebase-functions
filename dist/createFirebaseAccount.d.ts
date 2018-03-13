/**
 * Creates or updates Firebase auth user account.
 * @param admin The configurated admin object.
 * @param {string} uid The uid of the user.
 * @param {string} username The username of the user.
 * @param {string} [photoURL] Optional user's photo URL.
 * @param {string} [email] Optional user's email.
 * @param {boolean} [emailVerified] Optional boolean whether or not the user's email is verified.
 * @param {string} [phoneNumber] Optional user's phone number.
 * @param {boolean} [disabled] Optional boolean whether or not the user is disabled.
 * @returns {Promise} Promise object.
 */
export declare function createFirebaseAccount(admin: any, uid: string, username: string, photoURL?: string, email?: string, emailVerified?: boolean, phoneNumber?: string, disabled?: boolean): Promise<any>;
