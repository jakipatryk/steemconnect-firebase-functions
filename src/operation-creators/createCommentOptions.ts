import { createOperation } from './createOperation';
import { CommentOptionsConfig } from './../shared/interfaces/CommentOptionsConfig';
import { Operation } from '../shared/interfaces/Operation';

export const createCommentOptions = ({
  author,
  permlink,
  max_accepted_payout = '1000000.000 SBD',
  percent_steem_dollars = 10000,
  allow_votes = true,
  allow_curation_rewards = true,
  extensions: [...restExtensions] = []
}: CommentOptionsConfig): Operation =>
  createOperation('comment_options', {
    author,
    permlink,
    max_accepted_payout,
    percent_steem_dollars,
    allow_votes,
    allow_curation_rewards,
    extensions: [...restExtensions]
  });
