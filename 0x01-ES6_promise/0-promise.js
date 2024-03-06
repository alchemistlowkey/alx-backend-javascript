function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const responseData = true;
    if (responseData) {
      resolve(responseData);
    } else {
      reject(responseData);
    }
  });
}

export default getResponseFromAPI;
