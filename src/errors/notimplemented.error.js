const baseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");
class notImplementedError extends baseError {
  constructor(methodName) {
    super(
      "NotImplementedError",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} is not implemented`,
      {}
    );
  }
}
module.exports = notImplementedError;
