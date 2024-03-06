import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to wait for all promises to settle
  try {
    const results = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);
      // Transform the results array to the desired structure
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : String(result.reason),
    }));
  } catch (error) {
    // Handle any unexpected errors during Promise settlement
    return [{ status: 'rejected', value: String(error) }];
  }
}
