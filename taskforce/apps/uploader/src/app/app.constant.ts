enum EnvValidationMessage {
  DBHostRequired = 'MongoDB host is required',
  DBNameRequired = 'Database name is required',
  DBPortRequired = 'MongoDB port is required',
  DBUserRequired = 'MongoDB user is required',
  DBPasswordRequired = 'MongoDB password is required',
  DBBaseAuthRequired = 'MongoDB authentication base is required'
}

enum Port {
  Min = 0,
  Max = 65535
}

enum AvatarErrorMessages {
  Exist = 'Avatar already exist',
  IsNotExist = 'Avatar is not exist',
  IsNotLoaded = 'File is not loaded'
}

enum AvatarSettings {
  Directory = '/images/avatars',
  FieldName = 'avatar',
  MaxSize = 500000,
}

const AVATAR_TYPES = /(jpg|jpeg|png)$/;
const ASSETS_DIRECTORY = 'assets';
const ENV_FILE_PATH = 'environments/.uploader.env';
const DEFAULT_PORT = 3333;

export {
  EnvValidationMessage,
  Port,
  AvatarErrorMessages,
  AvatarSettings,
  AVATAR_TYPES,
  ASSETS_DIRECTORY,
  ENV_FILE_PATH,
  DEFAULT_PORT,
}
