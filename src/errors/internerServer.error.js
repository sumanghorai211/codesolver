const baseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class internalServerError extends baseError {
  constructor(details) {
    super(
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Internal Server Error",
      details
    );
  }
}
module.exports = internalServerError;
