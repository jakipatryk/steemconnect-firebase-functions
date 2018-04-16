import { BroadcastResult } from './interfaces/BroadcastResult';
import { refreshAccessToken } from '../oauth2/refreshAccessToken';
import { ClientCredenctials } from './../oauth2/interfaces/ClientCredentials';
import { isAccessTokenExpiredError } from './../shared/errors/isAccessTokenExpiredError';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';

export const rely = ({ clientId, clientSecret }: ClientCredenctials) => ({
  access_token,
  refresh_token = ''
}: AccessTokenResponse) => async (
  broadcastable: Function
): Promise<BroadcastResult & Partial<AccessTokenResponse>> => {
  try {
    return await broadcastable({ access_token });
  } catch (err) {
    if (isAccessTokenExpiredError(err)) {
      const refreshedTokens = await refreshAccessToken({
        clientId,
        clientSecret,
        refreshToken: refresh_token
      });

      const broadcastResult = await broadcastable({
        access_token: refreshedTokens.access_token
      });

      return { ...refreshedTokens, ...broadcastResult };
    }
    throw err;
  }
};
