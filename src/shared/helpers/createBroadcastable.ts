import { broadcastOperations } from '../../broadcasting/broadcastOperations';
import { createDeleteComment } from '../../operation-creators/createDeleteComment';
import { createVote } from '../../operation-creators/createVote';
import { VoteConfig } from '../interfaces/VoteConfig';
import { combine, pipe } from '../utils';
import { createComment } from './../../operation-creators/createComment';
import { createCommentOptions } from './../../operation-creators/createCommentOptions';
import { createCustomJson } from './../../operation-creators/createCustomJson';
import { CommentConfig } from './../interfaces/CommentConfig';
import { CommentOptionsConfig } from './../interfaces/CommentOptionsConfig';
import { CustomJsonConfig } from './../interfaces/CustomJsonConfig';
import { DeleteCommentConfig } from './../interfaces/DeleteCommentConfig';
import { Operation } from './../interfaces/Operation';

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

export const createBroadcastableDeleteComment = pipe<DeleteCommentConfig>(
  createDeleteComment,
  Array.of,
  broadcastOperations
);
