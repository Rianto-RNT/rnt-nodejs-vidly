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

const CourseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: Boolean,
});

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

async function getCourses() {
  const course = await Course.find();
  console.log(course);
}

async function getCourse() {
  const course = await Course.find({ author: "Rianto", isPublished: true })
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
async function getCourse() {
  const course = await Course
    // .find({ price: { $gte: 10, $lte: 20 } })
    .find({ price: { $in: [10, 15, 20] } }) // multiple value using an array
    .limit(10)
    .sort({ name: -1 })
    .select({ name: 1, tags: 1 });
  console.log(course);
}

// createCourse();
// getCourses();
getCourse();
