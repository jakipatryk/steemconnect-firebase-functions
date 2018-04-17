"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOperation_1 = require("./createOperation");
exports.createDeleteComment = ({ author, permlink }) => createOperation_1.createOperation('delete_comment', { author, permlink });
