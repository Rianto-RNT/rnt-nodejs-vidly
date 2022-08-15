console.log("Before");
const user = getUser(1);
console.log(user);
console.log("After");

// Callback
// Promises
// Async - Await

function getUser(id) {
  setTimeout(() => {
    console.log("Reading a user from a database..");
    return { id: id, githubUsername: "Rianto-RNT" };
  }, 2000);

  return 1;
}
