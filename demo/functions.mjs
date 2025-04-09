export const logWithTime = (val) =>
  console.log(new Date().toJSON().substr(11, 12), val);
export const getAsyncData = (dataToReturn, timeToWait, fail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (fail ? reject("FAILED") : resolve(dataToReturn)),
      timeToWait
    )
  );
