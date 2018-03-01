"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
function broadcastComment(accessToken, parentAuthor, parentPermlink, commentAuthor, commentPermlink, commentBody, jsonMetadata) {
    const operation = [
        'comment',
        {
            parent_author: parentAuthor,
            parent_permlink: parentPermlink,
            author: commentAuthor,
            permlink: commentPermlink,
            title: '',
            body: commentBody,
            json_metadata: JSON.stringify(jsonMetadata) || ''
        }
    ];
    return broadcaster.broadcastOperations(accessToken, [operation]);
}
exports.broadcastComment = broadcastComment;
