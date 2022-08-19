const mongoose = require("mongoose");
const dotenv = require("dotenv");

// LOAD ENV
dotenv.config({ path: "./.env" });

// DB CONNECT
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB Locally. Connected...`))
  .catch((err) => console.log("MongoDB Local Connection error...", err));

// SCHEMA
const CourseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  price: Number,
  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", CourseSchema);

async function getAllCourse() {
  const course = await Course.find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 })
    // .sort({ '-name' }) // asc order
    .select({ name: 1, author: 1 });
  // .select({ 'name author' }); // desc order

  console.log(course);
}

getAllCourse();
