const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: [true, "Difficulty is required"],
    default: "Easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, "Input is required"],
      },
      output: {
        type: String,
        required: [true, "Output is required"],
      },
    },
  ],
  editorail: {
    type: String,
  },
});
module.exports = mongoose.model("Problem", problemSchema);
