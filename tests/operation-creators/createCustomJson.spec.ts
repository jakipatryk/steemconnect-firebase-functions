import { createCustomJson } from '../../src/operation-creators/createCustomJson';

import { expect } from 'chai';

describe('createCustomJson', () => {
  const requiredPostingAuths = ['jakipatryk'];
  const id = 'follow';
  const customJson = [
    'reblog',
    {
      account: 'jakipatryk',
      author: 'ned',
      permlink: 'i-am-ned'
    }
  ];

  it('should create custom_json operation if only required parameters are provided', () => {
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

    const operation = createCustomJson(requiredPostingAuths, id, customJson);

    expect(operation).to.deep.equal(expectedOperation);
  });

  it('should create custom_json operation if optional parameter (requiredAuths) is provided', () => {
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

    const operation = createCustomJson(
      requiredPostingAuths,
      id,
      customJson,
      requiredAuths
    );

    expect(operation).to.deep.equal(expectedOperation);
  });
});
