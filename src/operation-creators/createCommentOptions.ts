import { createOperation } from './createOperation';
import { CommentOptionsConfig } from './../interfaces/CommentOptionsConfig';
import { Operation } from '../interfaces/Operation';

/**
 * Creates and returns the comment_option operation.
 * @param {Object} config The configuration object for vote operation.
 * @param {string} config.author The author of the post/comment.
 * @param {string} config.permlink The permlink of the post/comment.
 * @param {Array} [config.extensions] Optional extensions (ex. beneficiaries).
 * @param {string} [config.max_accepted_payout] Optional maximum accepted payout in the form of string (ex. '1000000.000 SBD')
 * @param {number} [config.percent_steem_dollars] Optional percent of the rewards in Steem Blockchain Dolars (10000 stands for 50/50 split and it is the default).
 * @param {boolean} [config.allow_votes] Optional boolean that enables/disables upvoting a post/comment.
 * @param {boolean} [config.allow_curation_rewards] Optional boolean that enables/disables the curation rewards.
 * @returns {Array} A single comment_option operation in the form of an array.
 */
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
