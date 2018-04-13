import { refreshAccessToken } from '../oauth2/refreshAccessToken';
import { pipe } from './../shared/utils';
import { isAccessTokenError } from './../shared/errors/isAccessTokenError';
import { AccessTokenResponse } from './../shared/interfaces/AccessTokenResponse';

export const rely = ({ clientId, clientSecret }) => ({
  access_token,
  refresh_token
}: AccessTokenResponse) => async (broadcastable: Function) => {
  try {
    return await broadcastable({ access_token });
  } catch (err) {
    if (isAccessTokenError(err)) {
      const refreshedTokens = await refreshAccessToken({
        client_id,
        client_secret,
        refresh_token
      });
      return await broadcastable({
        access_token: refreshedTokens.access_token
      });
    }
    throw err;
  }
};
