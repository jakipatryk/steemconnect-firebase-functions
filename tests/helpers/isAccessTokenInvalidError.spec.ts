import { isAccessTokenInvalidError } from '../../src/helpers/isAccessTokenInvalidError';
import { OAuth2Error } from './../../src/interfaces/OAuth2Error';

import {
  ACCESS_TOKEN_INVALID,
  ACCESS_TOKEN_INVALID_DESCRIPTION
} from './../../src/errors/ACCESS_TOKEN_INVALID';

import { expect } from 'chai';

describe('isAccessTokenInvalidError', () => {
  it('should return true if provided OAuth2 error is the error of invalid access token', () => {
    const oAuth2Error: OAuth2Error = {
      error: ACCESS_TOKEN_INVALID,
      error_description: ACCESS_TOKEN_INVALID_DESCRIPTION
    };

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
