import { getAccessTokenFromFirestore } from '../../src/firebase/getAccessTokenFromFirestore';

import { expect } from 'chai';

describe('getAccessTokenFromFirestore', () => {
  it('should return access token if exists', async () => {
    const Admin = function() {
      this.firestore = () => this;
      this.doc = path => this;
      this.get = async () => {
        return {
          exists: true,
          data: () => {
            return {
              access_token: 'fdsdfrerefv342.5435fd',
              expires_in: 604800,
              username: 'gg'
            };
          }
        };
      };
    };
    const admin = new Admin();
    const uid = 'steemconnect:gg';

    const accessToken = await getAccessTokenFromFirestore(admin, uid);

    expect(accessToken).to.exist.and.include({
      access_token: 'fdsdfrerefv342.5435fd'
    });
  });

  it('should throw an error if token does not exist', () => {
    const Admin = function() {
      this.firestore = () => this;
      this.doc = path => this;
      this.get = async () => {
        return {
          exists: false
        };
      };
    };
    const admin = new Admin();
    const uid = 'steemconnect:gg';

    return getAccessTokenFromFirestore(admin, uid).catch(err => {
      expect(err).to.exist;
    });
  });
});
