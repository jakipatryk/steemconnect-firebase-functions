import { createOperation } from './createOperation';
import { DeleteCommentConfig } from './../shared/interfaces/DeleteCommentConfig';
import { Operation } from '../shared/interfaces/Operation';

export const createDeleteComment = ({
  author,
  permlink
}: DeleteCommentConfig): Operation =>
  createOperation('delete_comment', { author, permlink });
