// const p = Promise.reject(new Error("reason fo rejection..."));
// p.catch((error) => console.log(error));

const promiseOne = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

const promiseTwo = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

Promise.race([promiseOne, promiseTwo])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error", err.message));
