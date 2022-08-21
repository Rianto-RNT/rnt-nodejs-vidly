const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB Locally. Connected...`))
  .catch((err) => console.log("MongoDB Local Connection error...", err));

// SCHEMA FOR MONGO-PLAYGROUND
const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: Boolean,
});

// // SCHEMA FOR MONGO-EXERCISE
// const CourseSchema = new mongoose.Schema({
//   name: String,
//   author: String,
//   tags: [String],
//   price: Number,
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   isPublished: Boolean,
// });

const Course = mongoose.model("Course", CourseSchema);

async function createCourse() {
  const course = new Course({
    name: "React js",
    author: "Rianto",
    tags: ["react", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getAllCourse() {
  const course = await Course.find();
  console.log(course);
}

async function getCoursesOne() {
  const course = await Course.find({ author: "Rianto", isPublished: true })
    .limit(10)
    .sort({ name: -1 })
    .select({ name: 1, tags: 1 });
  console.log(course);
}

async function getCoursesTwo() {
  // LOGICAL OPERATOR
  // or
  // and
  const course = await Course
    // .find({ author: "Rianto", isPublished: true })
    .find()
    .or([{ author: "Rianto" }, { isPublished: true }])
    .and([])
    .limit(10)
    .sort({ name: -1 })
    .select({ name: 1, tags: 1 });
  console.log(course);
}

// MONGODB KEY VALUE
// eq (equal)
// ne (not equal)
// gt (grater than)
// gte (greater than pr equal to)
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in)
async function getCoursesThree() {
  const course = await Course
    // .find({ price: { $gte: 10, $lte: 20 } })
    .find({ price: { $in: [10, 15, 20] } }) // multiple value using an array
    .limit(10)
    .sort({ name: -1 })
    .select({ name: 1, tags: 1 });
  console.log(course);
}

async function getCoursesFour() {
  const course = await Course
    // .find({ author: "Rianto", isPublished: true })

    // REGULAR EXPRESSIONS
    // Starts with Rian
    .find({ author: /^Rian/ })

    // End with RNT
    .find({ author: /RNT$/i })

    // Contain Rian word
    .find({ author: /.*Rian.*/ })
    .limit(10)
    .sort({ name: -1 })
    .select({ name: 1, tags: 1 });
  console.log(course);
}

async function getCoursesFive() {
  const course = await Course.find({ author: "Rianto", isPublished: true })
    .limit(10)
    .sort({ name: -1 })
    .count();
  console.log(course);
}

async function getCoursesSix() {
  const pageNumber = 2;
  const pageSize = 10;

  const course = await Course.find({ author: "Rianto", isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: -1 })
    .select({ name: 1, tags: 1 });
  console.log(course);
}

async function updateCourse(id) {
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "Rianto",
        isPublished: false,
      },
    },
    { new: true }
  );

  console.log(course);
}

// updateCourse("62fc844122d90aa22bb61032");

async function removeCourse(id) {
  // const result = await Course.deleteOne({ _id: id });
  const course = await Course.findOneAndRemove(id);
  console.log(course);
}

removeCourse("62fc844122d90aa22bb61032");

// createCourse();
// getAllCourse();
// getCoursesOne();
// getCoursesTwo();
// getCoursesThree();
// getCoursesFour();
// getCoursesFive();
// getCoursesSix();
