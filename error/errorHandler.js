function errorHandler({ res, error }) {
  return res.status(error.statusCode).json({
    message: error.message,
  });
}

exports.errorHandler = errorHandler;
