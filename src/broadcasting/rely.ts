import { refreshAccessToken } from '../oauth2/refreshAccessToken';
import { ClientCredentials } from './../oauth2/interfaces/ClientCredentials';
import { isAccessTokenExpiredError } from './../shared/errors/isAccessTokenExpiredError';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';
import { BroadcastResult } from './interfaces/BroadcastResult';

export const rely = ({
  clientId,
  clientSecret
}: Required<ClientCredentials>) => ({
  access_token,
  refresh_token,
  username,
  expires_in
}: Required<AccessTokenResponse>) => async (
  broadcastable: Function
): Promise<BroadcastResult & Partial<AccessTokenResponse>> => {
  try {
    return await broadcastable({ access_token, username });
  } catch (err) {
    if (isAccessTokenExpiredError(err)) {
      const refreshedTokens = await refreshAccessToken({
        clientId,
        clientSecret,
        access_token,
        refresh_token,
        username,
        expires_in
      });
      const broadcastResult = await broadcastable({
        access_token: refreshedTokens.access_token,
        username
      });
      return { ...refreshedTokens, ...broadcastResult };
    }
    throw err;
  }
};
