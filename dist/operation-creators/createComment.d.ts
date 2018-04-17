import { CommentConfig } from './../shared/interfaces/CommentConfig';
import { Operation } from '../shared/interfaces/Operation';
export declare const createComment: ({ parent_permlink, author, permlink, body, parent_author, title, json_metadata }: CommentConfig) => Operation;
