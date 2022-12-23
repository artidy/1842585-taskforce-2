enum EnvValidationMessage {
  ServerInvalid = 'Host smtp server is invalid',
  ServerPortInvalid = 'Server port is invalid',
  EmailIncorrect = 'Email incorrect',
  UserIncorrect = 'User incorrect',
  PasswordIncorrect = 'Password incorrect',
  DBHostRequired = 'MongoDB host is required',
  DBNameRequired = 'Database name is required',
  DBPortRequired = 'MongoDB port is required',
  DBUserRequired = 'MongoDB user is required',
  DBPasswordRequired = 'MongoDB password is required',
  DBBaseAuthRequired = 'MongoDB authentication base is required',
  RabbitUserRequired = 'Rabbit user incorrect',
  RabbitPasswordRequired = 'Rabbit password incorrect',
  RabbitHostRequired = 'Rabbit host incorrect',
  RabbitQueueRequired = 'Rabbit queue incorrect',
}

const MIN_PORT = 0;
const MAX_PORT = 65535;
const ENV_FILE_PATH = 'environments/.notify.env';
const SUBSCRIBER_EMAIL_NOT_VALID = 'Неверный формат email';
const SUBSCRIBER_EXIST = 'Подписчик уже существует';
const SUBSCRIBER_NOT_EXIST = 'Подписчик не существует';

export {
  EnvValidationMessage,
  MIN_PORT,
  MAX_PORT,
  ENV_FILE_PATH,
  SUBSCRIBER_EMAIL_NOT_VALID,
  SUBSCRIBER_EXIST,
  SUBSCRIBER_NOT_EXIST
}
