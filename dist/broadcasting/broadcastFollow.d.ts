import { BroadcastResult } from './../interfaces/BroadcastResult';
/**
 * Broadcasts a comment to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} username The username of the user who wants to follow somebody.
 * @param {string} userToFollow The username of the user to follow.
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export declare function broadcastFollow(accessToken: string, username: string, userToFollow: string): Promise<BroadcastResult>;
