/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} username The username of the user who wants to unfollow somebody.
 * @param {string} userToUnfollow The username of the user to unfollow.
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export declare function broadcastUnfollow(accessToken: string, username: string, userToUnfollow: string): Promise<any>;
