import { createCustomJson } from '../../src/operation-creators/createCustomJson';

import { expect } from 'chai';

describe('createCustomJson', () => {
  const requiredPostingAuths = ['jakipatryk'];
  const id = 'follow';
  const customJson = JSON.stringify([
    'reblog',
    {
      account: 'jakipatryk',
      author: 'ned',
      permlink: 'i-am-ned'
    }
  ]);

  it('should create custom_json operation if only required config properties are provided', () => {
    const expectedOperation = [
      'custom_json',
      {
        required_auths: [],
        required_posting_auths: ['jakipatryk'],
        id: 'follow',
        json: JSON.stringify([
          'reblog',
          {
            account: 'jakipatryk',
            author: 'ned',
            permlink: 'i-am-ned'
          }
        ])
      }
    ];

    const actualOperation = createCustomJson({
      required_posting_auths: requiredPostingAuths,
      id,
      json: customJson
    });

    expect(actualOperation).to.deep.equal(expectedOperation);
  });

  it('should create custom_json operation if optional config property (requiredAuths) is provided', () => {
    const requiredAuths = ['adammalysz'];
    const expectedOperation = [
      'custom_json',
      {
        required_auths: ['adammalysz'],
        required_posting_auths: ['jakipatryk'],
        id: 'follow',
        json: JSON.stringify([
          'reblog',
          {
            account: 'jakipatryk',
            author: 'ned',
            permlink: 'i-am-ned'
          }
        ])
      }
    ];

    const actualOperation = createCustomJson({
      required_posting_auths: requiredPostingAuths,
      id,
      json: customJson,
      required_auths: requiredAuths
    });

    expect(actualOperation).to.deep.equal(expectedOperation);
  });
});
