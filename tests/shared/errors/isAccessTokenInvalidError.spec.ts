import { isAccessTokenInvalidError } from '../../../src/shared/errors/isAccessTokenInvalidError';
import { OAuth2Error } from './../../../src/shared/interfaces/OAuth2Error';
import { ACCESS_TOKEN_INVALID } from './../../../src/shared/errors/constants';

import { expect } from 'chai';

describe('isAccessTokenInvalidError', () => {
  it('should return true if provided OAuth2 error is the error of invalid access token', () => {
    const oAuth2Error: OAuth2Error = ACCESS_TOKEN_INVALID;

    expect(isAccessTokenInvalidError(oAuth2Error)).to.be.true;
  });

  it('should return false if provided OAuth2 error is NOT the error of invalid access token', () => {
    const oAuth2Error: OAuth2Error = {
      error: 'not_invalid_error',
      error_description: 'not invalid lol'
    };

    expect(isAccessTokenInvalidError(oAuth2Error)).to.be.false;
  });
});
