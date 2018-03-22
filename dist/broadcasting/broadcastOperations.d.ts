import { BroadcastResult } from './../interfaces/BroadcastResult';
import { Operations } from '../interfaces/Operation';
/**
 * Broadcasts operations to the Steem blockchain.
 * @param {string} accessToken The access_token of the user.
 * @param {Array} operations An array of operations to broadcast.
 * @returns {Promise} Promise object that resolves into the result of the operations.
 */
export declare function broadcastOperations(accessToken: string, operations: Operations): Promise<BroadcastResult>;
