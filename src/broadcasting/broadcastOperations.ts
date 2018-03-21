import { Operations } from '../interfaces/Operation';

import * as rp from 'request-promise';

/**
 * Broadcasts operations to the Steem blockchain.
 * @param {string} accessToken The access_token of the user.
 * @param {Array} operations An array of operations to broadcast.
 * @returns {Promise} Promise object that resolves into the result of the operations.
 */
export async function broadcastOperations(
  accessToken: string,
  operations: Operations
): Promise<any> {
  try {
    const options = {
      uri: 'https://steemconnect.com/api/broadcast',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: {
        operations: operations
      },
      json: true
    };

    const result = await rp.post(options);
    return result;
  } catch (e) {
    throw e.error;
  }
}
