import { checkError } from '../../src/helpers/checkError';
import { OAuth2Error } from './../../src/interfaces/OAuth2Error';
import { ACCESS_TOKEN_INVALID } from './../../src/errors/ACCESS_TOKEN_INVALID';

import { expect } from 'chai';

describe('checkError', () => {
  const oAuth2Error: OAuth2Error = {
    error: 'invalid_grant',
    error_description: 'The token has invalid role'
  };

  it('should return true if provided OAuth2 error is equal to provided error constants', () => {
    const errorToCheckAgainst: OAuth2Error = ACCESS_TOKEN_INVALID;

    expect(checkError(oAuth2Error, errorToCheckAgainst)).to.be.true;
  });

  it('should return true if provided OAuth2 error is NOT equal to provided error constants', () => {
    const errorToCheckAgainst: OAuth2Error = {
      error: 'bla bla',
      error_description: 'car'
    };

    expect(checkError(oAuth2Error, errorToCheckAgainst)).to.be.false;
  });
});
