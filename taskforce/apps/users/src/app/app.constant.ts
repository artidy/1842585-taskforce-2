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

enum Port {
  Min = 0,
  Max = 65535
}

enum UserErrorMessages {
  EmailNotValid = 'Неверный формат email',
  DateBirthNotValid = 'Неверный формат даты рождения'
}

const RABBITMQ_SERVICE_NAME = 'RABBITMQ_SERVICE';
const ENV_FILE_PATH = 'environments/.users.env';
const DEFAULT_PORT = 3333;

export {
  EnvValidationMessage,
  Port,
  UserErrorMessages,
  RABBITMQ_SERVICE_NAME,
  ENV_FILE_PATH,
  DEFAULT_PORT,
}
