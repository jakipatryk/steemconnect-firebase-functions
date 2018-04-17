import { VoteConfig } from './../shared/interfaces/VoteConfig';
import { Operation } from '../shared/interfaces/Operation';
export declare const createVote: ({ voter, author, permlink, weight }: VoteConfig) => Operation;
