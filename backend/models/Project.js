const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  date: String,
  status: {
    type: String,
    default: "submitted",
  },
  category: String,
});

module.exports = mongoose.model("Project", projectSchema);
