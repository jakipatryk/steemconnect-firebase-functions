/**
 * Creates and returns Firebase custom auth token.
 * @param admin The configurated firebase-admin object.
 * @param {string} uid The uid of the user you want to mind custom Firebase auth token for.
 * @returns {Promise} Promise object that resolves into Firebase custom auth token.
 */
export declare function mintFirebaseToken(admin: any, uid: string): Promise<string>;
