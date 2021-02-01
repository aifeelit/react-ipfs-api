const internalError = (message, internalCode) => ({
  message,
  internalCode,
});

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = (message) => internalError(message, exports.DEFAULT_ERROR);

exports.DEFAULT_DATABASE_ERROR = 'database_error';
exports.defaultDatabase = (sequelizeError) => {
  let errors;
  if (sequelizeError.errors) {
    errors = sequelizeError.errors.map((error) => error.message);
  } else if (sequelizeError.error) {
    errors = [sequelizeError.error];
  } else {
    errors = [sequelizeError.message];
  }
  return internalError(
    `${sequelizeError.name || 'sequelizeError'}: ${errors.join(', ')}`,
    exports.DEFAULT_DATABASE_ERROR
  );
};

exports.EMPTY_TOKEN = 'empty_token';
exports.emptyToken = () => internalError('No API Token provided.', exports.EMPTY_TOKEN);

exports.INVALID_TOKEN = 'invalid_token';
exports.invalidToken = () => internalError('The submitted API token is invalid.', exports.INVALID_TOKEN);

exports.DISABLED_TOKEN = 'disabled_token';
exports.disabledToken = () => internalError('API Token is disabled.', exports.DISABLED_TOKEN);
