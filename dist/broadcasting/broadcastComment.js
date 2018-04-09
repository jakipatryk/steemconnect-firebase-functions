"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastComment = ({ parentPermlink, commentAuthor, commentPermlink, commentBody, parentAuthor = '', commentTitle = '', commentMetadata }) => ({ access_token }) => createBroadcastable_1.createBroadcastableComment({
    parent_permlink: parentPermlink,
    author: commentAuthor,
    permlink: commentPermlink,
    body: commentBody,
    parent_author: parentAuthor,
    title: commentTitle,
    json_metadata: JSON.stringify(commentMetadata)
})({ access_token });
