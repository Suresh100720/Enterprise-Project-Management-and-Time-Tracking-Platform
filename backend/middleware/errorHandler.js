export const errorHandler = (
  errorObject,
  req,
  res,
  next
) => {

  console.error(errorObject);

  const statusCode = errorObject.statusCode || 500;

  res.status(statusCode).json({
    message: errorObject.message || "Server Error"
  });
};