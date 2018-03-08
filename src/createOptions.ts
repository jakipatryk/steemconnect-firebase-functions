import { Operation } from './interfaces/Operation';

/**
 * Creates and returns the comment_option operation.
 * @param {string} author The author of the post/comment.
 * @param {string} permlink The permlink of the post/comment.
 * @param {Array} [extensions] Optional extensions (ex. beneficiaries).
 * @param {string} [maxAcceptedPayout] Optional maximum accepted payout in the form of string (ex. '1000000.000 SBD')
 * @param {number} [percentSteemDolars] Optional percent of the rewards in Steem Blockchain Dolars (10000 stands for 50/50 split and it is the default).
 * @param {boolean} [allowVotes] Optional boolean that enables/disables upvoting a post/comment.
 * @param {boolean} [allowCurationRewards] Optional boolean that enables/disables the curation rewards.
 * @returns {Array} A single comment_option operation in the form of an array.
 */
export function createOptions(
  author: string,
  permlink: string,
  extensions?: Array<any>,
  maxAcceptedPayout?: string,
  percentSteemDolars?: number,
  allowVotes?: boolean,
  allowCurationRewards?: boolean
): Operation {
  const optionsOperation: Operation = [
    'comment_options',
    {
      author,
      permlink,
      max_accepted_payout: maxAcceptedPayout || '1000000.000 SBD',
      percent_steem_dollars: percentSteemDolars || 10000,
      allow_votes: allowVotes || true,
      allow_curation_rewards: allowCurationRewards || true,
      extensions: extensions || []
    }
  ];

  return optionsOperation;
}
