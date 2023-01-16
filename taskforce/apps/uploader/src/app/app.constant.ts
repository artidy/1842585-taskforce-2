import { SUBSCRIBER_EXIST } from '../../../notify/src/app/app.constant';

enum EnvValidationMessage {
  DBHostRequired = 'MongoDB host is required',
  DBNameRequired = 'Database name is required',
  DBPortRequired = 'MongoDB port is required',
  DBUserRequired = 'MongoDB user is required',
  DBPasswordRequired = 'MongoDB password is required',
  DBBaseAuthRequired = 'MongoDB authentication base is required',
  UploadDirectoryRequired = 'Upload directory can\'t be empty',
  MaxFileSize = 'Max file size can\'t be empty',
}

const ENV_FILE_PATH = 'environments/.uploader.env';
const MIN_PORT = 0;
const MAX_PORT = 65535;
const AVATAR_EXIST = 'Avatar already exist';
const AVATAR_IS_NOT_EXIST = 'Avatar is not exist';
const FILE_IS_NOT_LOADED = 'File is not loaded';

export {
  EnvValidationMessage,
  ENV_FILE_PATH,
  MIN_PORT,
  MAX_PORT,
  AVATAR_EXIST,
  AVATAR_IS_NOT_EXIST,
  FILE_IS_NOT_LOADED
}
