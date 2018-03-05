/**
 * Broadcasts an upvote to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} voter The username of the voter.
 * @param {string} author The username of the author of a comment/post that user wants to upvote.
 * @param {string} permlink The permlink of a comment/post that user wants to upvote.
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export declare function broadcastUpvote(accessToken: string, voter: string, author: string, permlink: string, weight: number): Promise<any>;
