const { StatusCodes } = require("http-status-codes");
function addProblem(req, res) {
  res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Problem added successfully" });
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
