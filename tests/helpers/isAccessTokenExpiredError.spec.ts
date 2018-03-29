import { isAccessTokenExpiredError } from '../../src/helpers/isAccessTokenExpiredError';
import { OAuth2Error } from './../../src/interfaces/OAuth2Error';

import {
  ACCESS_TOKEN_EXPIRED,
  ACCESS_TOKEN_EXPIRED_DESCRIPTION
} from './../../src/errors/ACCESS_TOKEN_EXPIRED';

import { expect } from 'chai';

describe('isAccessTokenExpiredError', () => {
  it('should return true if provided OAuth2 error is the error of expired access token', () => {
    const oAuth2Error: OAuth2Error = {
      error: ACCESS_TOKEN_EXPIRED,
      error_description: ACCESS_TOKEN_EXPIRED_DESCRIPTION
    };

    expect(isAccessTokenExpiredError(oAuth2Error)).to.be.true;
  });

  it('should return false if provided OAuth2 error is NOT the error of expired access token', () => {
    const oAuth2Error: OAuth2Error = {
      error: 'not_expired_error',
      error_description: 'not expired lol'
    };

    expect(isAccessTokenExpiredError(oAuth2Error)).to.be.false;
  });
});