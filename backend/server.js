const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/projecthub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  date: String,
  status: String,
  category: String,
});

const Project = mongoose.model("Project", projectSchema);

// Routes
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post("/api/projects", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

app.put("/api/projects/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

app.delete("/api/projects/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("✅ Backend running on port 5000"));
