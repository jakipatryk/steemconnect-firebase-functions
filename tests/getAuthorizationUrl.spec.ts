import { getAuthorizationUrl } from '../src/getAuthorizationUrl';

import { expect } from 'chai';

describe('getAuthorizationUrl', () => {
  it('should return a correct url when scope has one element', () => {
    const clientId = 'test.app';
    const redirectUri = 'https://wykop.pl/redirect';
    const scope = ['vote'];

    const authorizationUrl = getAuthorizationUrl(clientId, redirectUri, scope);

    expect(authorizationUrl).to.equal(
      'https://steemconnect.com/oauth2/authorize?client_id=test.app&response_type=code&redirect_uri=https%3A%2F%2Fwykop.pl%2Fredirect&scope=vote'
    );
  });

  it('should return a correct url when scope has more than one element', () => {
    const clientId = 'test.app';
    const redirectUri = 'https://adam.malysz/redirect';
    const scope = ['vote', 'comment'];

    const authorizationUrl = getAuthorizationUrl(clientId, redirectUri, scope);

    expect(authorizationUrl).to.equal(
      'https://steemconnect.com/oauth2/authorize?client_id=test.app&response_type=code&redirect_uri=https%3A%2F%2Fadam.malysz%2Fredirect&scope=vote%2Ccomment'
    );
  });
});
