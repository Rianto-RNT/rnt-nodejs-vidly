const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/rnt-playground")
  .then(() => console.log("Connected to MongoDB locally..."))
  .catch((err) => console.log("Could not connect to mongodb...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: Boolean,
});
