"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createOptions(author, permlink, extensions, maxAcceptedPayout, percentSteemDolars, allowVotes, allowCurationRewards) {
    const optionsOperation = [
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
exports.createOptions = createOptions;
