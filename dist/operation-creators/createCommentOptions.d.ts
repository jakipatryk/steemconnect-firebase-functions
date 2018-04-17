import { CommentOptionsConfig } from './../shared/interfaces/CommentOptionsConfig';
import { Operation } from '../shared/interfaces/Operation';
export declare const createCommentOptions: ({ author, permlink, max_accepted_payout, percent_steem_dollars, allow_votes, allow_curation_rewards, extensions: [...restExtensions] }: CommentOptionsConfig) => Operation;
