import { isAccessTokenError } from '../../src/helpers/isAccessTokenError';
import { OAuth2Error } from './../../src/interfaces/OAuth2Error';
import { ACCESS_TOKEN_REVOKED } from './../../src/errors/ACCESS_TOKEN_REVOKED';
import { ACCESS_TOKEN_EXPIRED } from './../../src/errors/ACCESS_TOKEN_EXPIRED';
import { ACCESS_TOKEN_INVALID } from './../../src/errors/ACCESS_TOKEN_INVALID';

import { expect } from 'chai';

describe('isAccessTokenError', () => {
  it('should return true if provided error is error of invalid access token', () => {
    const oAuth2Error: OAuth2Error = ACCESS_TOKEN_INVALID;

    expect(isAccessTokenError(oAuth2Error)).to.be.true;
  });

  it('should return true if provided error is error of expired access token', () => {
    const oAuth2Error: OAuth2Error = ACCESS_TOKEN_EXPIRED;

    expect(isAccessTokenError(oAuth2Error)).to.be.true;
  });

  it('should return true if provided error is error of revoked access token', () => {
    const oAuth2Error: OAuth2Error = ACCESS_TOKEN_REVOKED;

    expect(isAccessTokenError(oAuth2Error)).to.be.true;
  });

  it('should return false if provided error is not related to access token', () => {
    const oAuth2Error: OAuth2Error = {
      error: 'super_fancy_error',
      error_description: 'what an error!'
    };

    expect(isAccessTokenError(oAuth2Error)).to.be.false;
  });
});
