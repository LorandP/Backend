class HttpError extends Error {
  constructor(statusCode, message) {
    super();
    this.name = "HttpError";
    this.message = message;
    this.statusCode = statusCode ?? 500;
  }
}

module.exports = HttpError;