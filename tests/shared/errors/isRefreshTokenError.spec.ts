import { isRefreshTokenError } from '../../../src/shared/errors/isRefreshTokenError';
import { OAuth2Error } from './../../../src/shared/interfaces/OAuth2Error';
import { REFRESH_TOKEN_INVALID } from './../../../src/shared/errors/constants';

import { expect } from 'chai';

describe('isRefreshTokenError', () => {
  it('should return true if provided OAuth2 error is the error of invalid refresh token', () => {
    const oAuth2Error: OAuth2Error = REFRESH_TOKEN_INVALID;

    expect(isRefreshTokenError(oAuth2Error)).to.be.true;
  });

  it('should return false if provided OAuth2 error is NOT the error caused by refresh token', () => {
    const oAuth2Error: OAuth2Error = {
      error: 'not_refresh_token_error',
      error_description: 'not lol'
    };

    expect(isRefreshTokenError(oAuth2Error)).to.be.false;
  });
});
