const express = require("express");
const { problemController } = require("../../contollers");
const router = express.Router();

const problemRouter = express.Router();

problemRouter.post("/", problemController.addProblem);
problemRouter.get("/", problemController.getAllProblems);
problemRouter.get("/:id", problemController.getProblem);
problemRouter.put("/:id", problemController.updateProblem);
problemRouter.delete("/:id", problemController.deleteProblem);

module.exports = problemRouter;
