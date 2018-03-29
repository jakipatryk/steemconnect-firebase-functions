import { isAccessTokenRevokedError } from '../../src/helpers/isAccessTokenRevokedError';
import { OAuth2Error } from './../../src/interfaces/OAuth2Error';
import { ACCESS_TOKEN_REVOKED } from './../../src/errors/ACCESS_TOKEN_REVOKED';

import { expect } from 'chai';

describe('isAccessTokenRevokedError', () => {
  it('should return true if provided OAuth2 error is the error of revoked access token', () => {
    const oAuth2Error: OAuth2Error = ACCESS_TOKEN_REVOKED;

    expect(isAccessTokenRevokedError(oAuth2Error)).to.be.true;
  });

  it('should return false if provided OAuth2 error is NOT the error of revoked access token', () => {
    const oAuth2Error: OAuth2Error = {
      error: 'not_revoked_error',
      error_description: 'not revoked lol'
    };

    expect(isAccessTokenRevokedError(oAuth2Error)).to.be.false;
  });
});
