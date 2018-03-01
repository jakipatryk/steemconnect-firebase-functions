"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcaster = require("./broadcastOperations");
function broadcastPost(accessToken, mainTag, postAuthor, postPermlink, postTitle, postBody, jsonMetadata) {
    const operation = [
        'comment',
        {
            parent_author: '',
            parent_permlink: mainTag,
            author: postAuthor,
            permlink: postPermlink,
            title: postTitle,
            body: postBody,
            json_metadata: JSON.stringify(jsonMetadata) || ''
        }
    ];
    return broadcaster.broadcastOperations(accessToken, [operation]);
}
exports.broadcastPost = broadcastPost;
