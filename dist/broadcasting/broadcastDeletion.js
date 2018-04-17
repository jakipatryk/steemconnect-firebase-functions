"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBroadcastable_1 = require("../shared/helpers/createBroadcastable");
exports.broadcastDeletion = ({ author, permlink }) => ({ access_token }) => createBroadcastable_1.createBroadcastableDeleteComment({
    author,
    permlink
})({ access_token });
