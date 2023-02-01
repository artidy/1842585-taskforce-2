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

enum SubscriberErrorMessages {
  EmailNotValid = 'Неверный формат email',
  Exist = 'Подписчик уже существует',
  NotExist = 'Подписчик не существует'
}

enum Port {
  Min = 0,
  Max = 65535
}

enum EmailSubscriber {
  RegisteredSubject = 'Вы успешно зарегистрировались.',
  RegisteredTemplate = './add-subscriber'
}

const ENV_FILE_PATH = 'environments/.notify.env';
const DEFAULT_PORT = 3333;

export {
  EnvValidationMessage,
  SubscriberErrorMessages,
  Port,
  EmailSubscriber,
  ENV_FILE_PATH,
  DEFAULT_PORT,
}
