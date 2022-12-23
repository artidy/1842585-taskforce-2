enum EnvValidationMessage {
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

const ENV_FILE_PATH = 'environments/.users.env';
const MIN_PORT = 0;
const MAX_PORT = 65535;
const AUTH_USER_EMAIL_NOT_VALID = 'Неверный формат email';
const AUTH_USER_DATE_BIRTH_NOT_VALID = 'Неверный формат даты рождения';

export {
  EnvValidationMessage,
  ENV_FILE_PATH,
  MIN_PORT,
  MAX_PORT,
  AUTH_USER_EMAIL_NOT_VALID,
  AUTH_USER_DATE_BIRTH_NOT_VALID,
}
