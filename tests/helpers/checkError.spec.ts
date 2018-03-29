import { checkError } from '../../src/helpers/checkError';
import { OAuth2Error } from './../../src/interfaces/OAuth2Error';

import { expect } from 'chai';

describe('checkError', () => {
  const oAuth2Error: OAuth2Error = {
    error: 'invalid_grant',
    error_description: 'The token is invalid'
  };

  it('should return true if provided OAuth2 error is equal to provided error constants', () => {
    const errorToCheck = 'invalid_grant';
    const errorToCheckDescription = 'The token is invalid';

    expect(checkError(oAuth2Error, errorToCheck, errorToCheckDescription)).to.be
      .true;
  });

  it('should return true if provided OAuth2 error is NOT equal to provided error constants', () => {
    const errorToCheck = 'bla_bla';
    const errorToCheckDescription = 'car';

    expect(checkError(oAuth2Error, errorToCheck, errorToCheckDescription)).to.be
      .false;
  });
});
