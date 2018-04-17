"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOperation_1 = require("./createOperation");
exports.createComment = ({ parent_permlink, author, permlink, body, parent_author = '', title = '', json_metadata = '' }) => createOperation_1.createOperation('comment', {
    parent_permlink,
    author,
    permlink,
    body,
    parent_author,
    title,
    json_metadata
});
