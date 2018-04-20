"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastDeletion = ({ permlink }) => ({ access_token, username }) => createBroadcastable_1.createBroadcastableDeleteComment({
    author: username,
    permlink
})({ access_token });
