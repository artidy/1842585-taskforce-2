enum EnvValidationMessage {
  DBHostRequired = 'MongoDB host is required',
  DBNameRequired = 'Database name is required',
  DBPortRequired = 'MongoDB port is required',
  DBUserRequired = 'MongoDB user is required',
  DBPasswordRequired = 'MongoDB password is required',
  DBBaseAuthRequired = 'MongoDB authentication base is required',
}

const ENV_FILE_PATH = 'environments/.uploader.env';
const MIN_PORT = 0;
const MAX_PORT = 65535;

export {
  EnvValidationMessage,
  ENV_FILE_PATH,
  MIN_PORT,
  MAX_PORT
}
