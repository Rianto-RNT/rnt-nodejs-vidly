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

const course = new Course({
  name: "Node.js",
  author: "Rianto",
  tags: ["node", "backend"],
  isPublished: true,
});
