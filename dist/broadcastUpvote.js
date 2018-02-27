"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
function broadcastUpvote(accessToken, voter, author, permlink, weight) {
    const operation = [
        'vote',
        {
            voter,
            author,
            permlink,
            weight
        }
    ];
    return broadcaster.broadcastOperations(accessToken, [operation]);
}
exports.broadcastUpvote = broadcastUpvote;
