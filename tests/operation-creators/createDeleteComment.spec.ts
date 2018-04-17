import { createDeleteComment } from '../../src/operation-creators/createDeleteComment';

import { expect } from 'chai';

describe('createDeleteComment', () => {
  const author = 'jakipatryk';
  const permlink = 'i-am-jakipatryk-from-polska';

  it('should create delete_comment operation', () => {
    const expectedOperation = [
      'delete_comment',
      {
        author: 'jakipatryk',
        permlink: 'i-am-jakipatryk-from-polska'
      }
    ];

    const actualOperation = createDeleteComment({
      author,
      permlink
    });

    expect(actualOperation).to.deep.equal(expectedOperation);
  });
});
