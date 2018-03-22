import { BroadcastResult } from './../interfaces/BroadcastResult';
/**
 * Broadcasts a post with beneficiaries details to the Steem blockchain and returns the result of the operation.
 * @param {string} accessToken The access_token of the user.
 * @param {string} mainTag The main tag of the post (not possible to change it later).
 * @param {string} postAuthor The username of the user who wants to add a post.
 * @param {string} postPermlink The permlink of the post.
 * @param {string} postTitle The title of the post.
 * @param {string} postBody The content of the post.
 * @param {string} beneficiariesAccount The username of the beneficiaries account.
 * @param {number} beneficiariesWeight The weight of the beneficiaries (ex. 2500 is equal the 25% rewards going to beneficiaries account).
 * @param {Object} [jsonMetadata] Optional additional metadata (ex. the name of the app or additional tags).
 * @returns {Promise} Promise object that resolves into the result of the operation.
 */
export declare function broadcastPostWithBeneficiaries(accessToken: string, mainTag: string, postAuthor: string, postPermlink: string, postTitle: string, postBody: string, beneficiariesAccount: string, beneficiariesWeight: number, jsonMetadata?: object): Promise<BroadcastResult>;
