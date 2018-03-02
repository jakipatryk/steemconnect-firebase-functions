import { Operation } from './interfaces/Operation';

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
