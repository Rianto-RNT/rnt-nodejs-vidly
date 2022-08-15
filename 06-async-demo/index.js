console.log("Before");
// Asnychronous code version
// Callback
getUser(1, (user) => {
  getRepositories(user.githubUsername, (repos) => {
    getCommits(repo, (commits) => {
      // CALLBACK HELL
    });
  });
});
console.log("After");

// Synchronous code version
console.log("Before");
const user = getUser(1);
const repos = getRepositories(user.githubUsername);
const commits = getCommits(repos[0]);
console.log("After");

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
