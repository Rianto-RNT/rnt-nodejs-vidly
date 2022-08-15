console.log("Before");
// Callback
getUser(1, (user) => {
  getRepositories(user.githubUsername, (repos) => {
    console.log("Repos", repos);
  });
});

// Get the repositories

console.log("After");

// Promises
// Async - Await

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database..");
    callback({ id: id, githubUsername: "Rianto-RNT" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling Github Repo API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
