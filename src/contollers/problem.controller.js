const { StatusCodes } = require("http-status-codes");
const newImplementedError = require("../errors/notimplemented.error");
const badRequest = require("../errors/badrequest.error");
const internalServerError = require("../errors/internerServer.error");
function addProblem(req, res, next) {
  try {
    {
      // Your logic to add a problem
      throw new internalServerError("addProblem");
    }
  } catch (error) {
    next(error);
  }
}
function getAllProblems(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "All problems retrieved successfully" });
}
function getProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Problem retrieved successfully" });
}
function updateProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Problem updated successfully" });
}
function deleteProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Problem deleted successfully" });
}

module.exports = {
  addProblem,
  getAllProblems,
  getProblem,
  updateProblem,
  deleteProblem,
};
