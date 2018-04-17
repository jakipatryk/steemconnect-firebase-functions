import { createOperation } from './createOperation';
import { VoteConfig } from './../shared/interfaces/VoteConfig';
import { Operation } from '../shared/interfaces/Operation';

export const createVote = ({
  voter,
  author,
  permlink,
  weight
}: VoteConfig): Operation =>
  createOperation('vote', { voter, author, permlink, weight });
