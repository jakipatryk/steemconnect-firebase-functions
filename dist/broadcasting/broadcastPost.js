"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastPost = ({ mainTag, author, permlink, title, body, metadata }) => ({ access_token }) => createBroadcastable_1.createBroadcastableComment({
    parent_permlink: mainTag,
    author: author,
    permlink: permlink,
    body: body,
    parent_author: '',
    title: title,
    json_metadata: JSON.stringify(metadata)
})({ access_token });
