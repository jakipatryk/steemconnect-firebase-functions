import { pipe, combine } from '../utils';
import { broadcastOperations } from '../../broadcasting/broadcastOperations';
import { createComment } from './../../operation-creators/createComment';
import { createCommentOptions } from './../../operation-creators/createCommentOptions';
import { createCustomJson } from './../../operation-creators/createCustomJson';
import { createVote } from '../../operation-creators/createVote';
import { Operation } from './../interfaces/Operation';
import { CommentConfig } from './../interfaces/CommentConfig';
import { CommentOptionsConfig } from './../interfaces/CommentOptionsConfig';
import { CustomJsonConfig } from './../interfaces/CustomJsonConfig';
import { VoteConfig } from '../interfaces/VoteConfig';

export const combineCommentWithOptions = combine<
  CommentConfig & CommentOptionsConfig,
  Operation
>(createComment, createCommentOptions);

export const createBroadcastableVote = pipe<VoteConfig>(
  createVote,
  Array.of,
  broadcastOperations
);

export const createBroadcastableComment = pipe<CommentConfig>(
  createComment,
  Array.of,
  broadcastOperations
);

export const createBroadcastableCommentWithOptions = pipe<
  CommentConfig & CommentOptionsConfig
>(combineCommentWithOptions, broadcastOperations);

export const createBroadcastableCustomJson = pipe<CustomJsonConfig>(
  createCustomJson,
  Array.of,
  broadcastOperations
);
