import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';
import { Comment } from './interfaces/Comment';
export declare const broadcastComment: ({ parentPermlink, commentPermlink, commentBody, parentAuthor, commentTitle, commentMetadata }: Comment) => ({ access_token, username }: AccessTokenResponse) => Promise<BroadcastResult>;
