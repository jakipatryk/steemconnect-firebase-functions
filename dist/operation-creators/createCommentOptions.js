"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOperation_1 = require("./createOperation");
exports.createCommentOptions = ({ author, permlink, max_accepted_payout = '1000000.000 SBD', percent_steem_dollars = 10000, allow_votes = true, allow_curation_rewards = true, extensions: [...restExtensions] = [] }) => createOperation_1.createOperation('comment_options', {
    author,
    permlink,
    max_accepted_payout,
    percent_steem_dollars,
    allow_votes,
    allow_curation_rewards,
    extensions: [...restExtensions]
});
