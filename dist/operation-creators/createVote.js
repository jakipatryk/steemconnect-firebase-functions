"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOperation_1 = require("./createOperation");
exports.createVote = ({ voter, author, permlink, weight }) => createOperation_1.createOperation('vote', { voter, author, permlink, weight });
