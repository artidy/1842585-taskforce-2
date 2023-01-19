enum EnvValidationMessage {
  DBHostRequired = 'MongoDB host is required',
  DBNameRequired = 'Database name is required',
  DBPortRequired = 'MongoDB port is required',
  DBUserRequired = 'MongoDB user is required',
  DBPasswordRequired = 'MongoDB password is required',
  DBBaseAuthRequired = 'MongoDB authentication base is required'
}

const ENV_FILE_PATH = 'environments/.uploader.env';
const MIN_PORT = 0;
const MAX_PORT = 65535;
const AVATAR_EXIST = 'Avatar already exist';
const AVATAR_IS_NOT_EXIST = 'Avatar is not exist';
const FILE_IS_NOT_LOADED = 'File is not loaded';
const AVATAR_TYPES = /(jpg|jpeg|png)$/;
const MAX_AVATAR_SIZE = 500000;
const ASSETS_DIRECTORY = 'assets';
const AVATAR_DIRECTORY = '/images/avatars';
const AVATAR_FIELD_NAME = 'avatar';

export {
  EnvValidationMessage,
  ENV_FILE_PATH,
  MIN_PORT,
  MAX_PORT,
  AVATAR_EXIST,
  AVATAR_IS_NOT_EXIST,
  FILE_IS_NOT_LOADED,
  AVATAR_TYPES,
  MAX_AVATAR_SIZE,
  ASSETS_DIRECTORY,
  AVATAR_DIRECTORY,
  AVATAR_FIELD_NAME
}
