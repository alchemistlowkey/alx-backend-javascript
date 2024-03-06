import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline:', error);
    });
}

export default handleProfileSignup;
