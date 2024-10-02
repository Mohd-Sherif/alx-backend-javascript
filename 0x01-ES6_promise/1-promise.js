export default function getResponseFromAPI(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
