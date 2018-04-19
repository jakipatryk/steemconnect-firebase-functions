import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Comment } from './interfaces/Comment';
export declare const broadcastComment: ({ parentPermlink, commentAuthor, commentPermlink, commentBody, parentAuthor, commentTitle, commentMetadata }: Comment) => ({ access_token }: AccessTokenResponse) => Promise<BroadcastResult>;
