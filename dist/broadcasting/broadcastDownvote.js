"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastDownvote = ({ voter, author, permlink, weight }) => ({ access_token }) => createBroadcastable_1.createBroadcastableVote({
    voter,
    author,
    permlink,
    weight: -weight
})({ access_token });
