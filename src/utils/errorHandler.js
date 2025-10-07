const baseError = require("../errors/base.error");
const { StatusCodes } = require("http-status-codes");
function errorHandler(err, req, res, next) {
  if (err instanceof baseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {},
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Internal Server Error",
    error: err.message,
    data: {},
  });
}
module.exports = errorHandler;
