import { createCommentOptions } from '../../src/operation-creators/createCommentOptions';

import { expect } from 'chai';

describe('createCommentOptions', () => {
  const author = 'ned';
  const permlink = 'i-am-ned';
  const extensions = [
    [
      0,
      {
        beneficiaries: [
          {
            account: 'utopian.pay',
            weight: 2500
          }
        ]
      }
    ]
  ];

  it('should create comment_options operation if only author and permlink provided', () => {
    const expectedOperation = [
      'comment_options',
      {
        author: 'ned',
        permlink: 'i-am-ned',
        max_accepted_payout: '1000000.000 SBD',
        percent_steem_dollars: 10000,
        allow_votes: true,
        allow_curation_rewards: true,
        extensions: []
      }
    ];

    const actualOperation = createCommentOptions({ author, permlink });

    expect(actualOperation).to.deep.equal(expectedOperation);
  });

  it('should create comment_options operation if optional config property (extensions) is provided', () => {
    const expectedOperation = [
      'comment_options',
      {
        author: 'ned',
        permlink: 'i-am-ned',
        max_accepted_payout: '1000000.000 SBD',
        percent_steem_dollars: 10000,
        allow_votes: true,
        allow_curation_rewards: true,
        extensions: [
          [
            0,
            {
              beneficiaries: [
                {
                  account: 'utopian.pay',
                  weight: 2500
                }
              ]
            }
          ]
        ]
      }
    ];

    const actualOperation = createCommentOptions({
      author,
      permlink,
      extensions
    });

    expect(actualOperation).to.deep.equal(expectedOperation);
  });
});
