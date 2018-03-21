import { broadcastPostWithBeneficiaries } from '../../src/broadcasting/broadcastPostWithBeneficiaries';
import * as broadcaster from '../../src/broadcasting/broadcastOperations';

import { expect } from 'chai';
import * as sinon from 'sinon';

describe('broadcastPostWithBeneficiaries', function() {
  const accessToken = 'fdsgfdew';
  const mainTag = 'maintag';
  const postAuthor = 'jakiaptryk-dev';
  const postPermlink = 'ftyfyytvgyb67';
  const postTitle = 'nice-title';
  const postBody = 'post content';
  const beneficiariesAccount = 'busy.pay';
  const beneficiariesWeight = 2500;

  beforeEach(function() {
    this.broadcastOperations = sinon.stub(broadcaster, 'broadcastOperations');
  });

  it('should call broadcastOperations with correct data of the post and beneficiaries details if jsonMetadata provided', async function() {
    const jsonMetadata = {
      community: 'busy'
    };
    const operations = [
      [
        'comment',
        {
          parent_author: '',
          parent_permlink: mainTag,
          author: postAuthor,
          permlink: postPermlink,
          title: postTitle,
          body: postBody,
          json_metadata: JSON.stringify(jsonMetadata)
        }
      ],
      [
        'comment_options',
        {
          author: postAuthor,
          permlink: postPermlink,
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
                    account: beneficiariesAccount,
                    weight: beneficiariesWeight
                  }
                ]
              }
            ]
          ]
        }
      ]
    ];

    await broadcastPostWithBeneficiaries(
      accessToken,
      mainTag,
      postAuthor,
      postPermlink,
      postTitle,
      postBody,
      beneficiariesAccount,
      beneficiariesWeight,
      jsonMetadata
    );

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  it('should call broadcastOperations with correct data of the comment to broadcast if jsonMetadata NOT provided', async function() {
    const operations = [
      [
        'comment',
        {
          parent_author: '',
          parent_permlink: mainTag,
          author: postAuthor,
          permlink: postPermlink,
          title: postTitle,
          body: postBody,
          json_metadata: ''
        }
      ],
      [
        'comment_options',
        {
          author: postAuthor,
          permlink: postPermlink,
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
                    account: beneficiariesAccount,
                    weight: beneficiariesWeight
                  }
                ]
              }
            ]
          ]
        }
      ]
    ];

    await broadcastPostWithBeneficiaries(
      accessToken,
      mainTag,
      postAuthor,
      postPermlink,
      postTitle,
      postBody,
      beneficiariesAccount,
      beneficiariesWeight
    );

    expect(this.broadcastOperations.calledWith(accessToken, operations)).to.be
      .true;
  });

  afterEach(function() {
    this.broadcastOperations.restore();
  });
});
