const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}

// createCourse("Node Course", [
//   new Author({ name: "Rianto" }),
//   new Author({ name: "Morrison" }),
// ]);

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  const course = await Course.findByIdAndUpdate(
    { _id: courseId },
    // {
    //   $set: {
    //     "author.name": "John Doe",
    //   },
    // },
    {
      $unset: {
        author: "",
      },
    }
  );
  // course.author.name = "Rianto RNT";
  // course.save();
}

// updateAuthor("63033dcf106afdac2ee6c04c");

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

// addAuthor("6304a4fe2ecceaa995e97647", new Author({ name: "Sarah" }));

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}

removeAuthor("6304a4fe2ecceaa995e97647", "6304a6148e6514557ea8d4ad");
