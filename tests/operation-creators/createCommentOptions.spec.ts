import { createCommentOptions } from '../../src/operation-creators/createCommentOptions';

import { expect } from 'chai';

describe('createCommentOptions', () => {
  const author = 'ned';
  const permlink = 'i-am-ned';

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

    const operation = createCommentOptions(author, permlink);

    expect(operation).to.deep.equal(expectedOperation);
  });

  it('should create comment_options operation if first optional argument (extensions) is provided', () => {
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

    const operation = createCommentOptions(author, permlink, extensions);

    expect(operation).to.deep.equal(expectedOperation);
  });

  it('should create comment_options operation if first optional argument is null, but any of next arguments is provided', () => {
    const expectedOperation = [
      'comment_options',
      {
        author: 'ned',
        permlink: 'i-am-ned',
        max_accepted_payout: '1000000.000 SBD',
        percent_steem_dollars: 200,
        allow_votes: true,
        allow_curation_rewards: true,
        extensions: []
      }
    ];
    const percentSteemDollars = 200;

    const operation = createCommentOptions(
      author,
      permlink,
      null,
      null,
      percentSteemDollars
    );

    expect(operation).to.deep.equal(expectedOperation);
  });
});
