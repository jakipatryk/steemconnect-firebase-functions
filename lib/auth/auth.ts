import * as qs from 'querystring';

export const getAuthorizationUrl = (
  clientId: string,
  redirectUri: string,
  scope: Array<string>
): string => {

    const base = 'https://steemconnect.com/oauth2/authorize?';
    const queryParams = {
        client_id: clientId,
        response_type: 'code',
        redirect_uri: redirectUri,
        scope: scope.join(',')
      };
    
      const endpoint = base + qs.stringify(queryParams);
      return endpoint;
      
};
