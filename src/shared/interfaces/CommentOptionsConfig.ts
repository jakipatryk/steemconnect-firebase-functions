export interface CommentOptionsConfig {
  author: string;
  permlink: string;
  extensions?: Array<any>;
  max_accepted_payout?: string;
  percent_steem_dollars?: number;
  allow_votes?: boolean;
  allow_curation_rewards?: boolean;
}
