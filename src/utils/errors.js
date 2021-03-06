
// Throw error
module.exports.throwError = (message, code) => {
   const error = new Error(message);
   error.statusCode = code;

   throw error;
};

// Pass error to another handler
module.exports.passError = (err, next) => {
   if (!err.statusCode) {
      err.statusCode = 500;
   }

   if (err.response && err.response.status) {
      err.statusCode = err.response.status;
   }

   console.log(err)

   if (next) {
      next(err);
   }
};
