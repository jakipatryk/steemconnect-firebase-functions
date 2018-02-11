import { Operations } from './interfaces/Operation';

import * as rp from 'request-promise';

export async function broadcastOperations(
  accessToken: string,
  operations: Operations
) {
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
