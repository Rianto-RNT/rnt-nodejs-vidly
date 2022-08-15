const p = Promise.reject(new Error("reason fo rejection..."));
p.catch((error) => console.log(error));
