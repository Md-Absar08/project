const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ _id: -1 });
  res.json(projects);
});

// POST project
router.post("/", async (req, res) => {
  const project = new Project(req.body);
  const saved = await project.save();
  res.json(saved);
});

// UPDATE status
router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(updated);
});

// DELETE project
router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
