const baseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class badRequest extends baseError {
  constructor(propertyName, details) {
    super(
      "BadRequest",
      StatusCodes.BAD_REQUEST,
      "Bad Request",
      `${propertyName} is missing or invalid`,
      details
    );
  }
}
module.exports = badRequest;
