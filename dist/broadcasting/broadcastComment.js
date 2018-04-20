"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastComment = ({ parentPermlink, commentPermlink, commentBody, parentAuthor = '', commentTitle = '', commentMetadata }) => ({ access_token, username }) => createBroadcastable_1.createBroadcastableComment({
    parent_permlink: parentPermlink,
    author: username,
    permlink: commentPermlink,
    body: commentBody,
    parent_author: parentAuthor,
    title: commentTitle,
    json_metadata: JSON.stringify(commentMetadata)
})({ access_token });
