"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastUpvote = ({ author, permlink, weight }) => ({ access_token, username }) => createBroadcastable_1.createBroadcastableVote({
    voter: username,
    author,
    permlink,
    weight
})({ access_token });
