import * as rp from 'request-promise';
import { AccessTokenResponse } from '../shared/interfaces/AccessTokenResponse';
import { Operations } from '../shared/interfaces/Operation';
import { BroadcastResult } from './interfaces/BroadcastResult';

export function broadcastOperations([...operations]: Operations) {
  return async function broadcast({
    access_token
  }: AccessTokenResponse): Promise<BroadcastResult> {
    return rp
      .post({
        uri: 'https://steemconnect.com/api/broadcast',
        headers: {
          Authorization: access_token,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: {
          operations: [...operations]
        },
        json: true
      })
      .catch(err => {
        throw err.error;
      });
  };
}
