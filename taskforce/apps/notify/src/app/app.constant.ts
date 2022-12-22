enum EnvValidationMessage {
  ServerInvalid = 'Host smtp server is invalid',
  ServerPortInvalid = 'Server port is invalid',
  EmailIncorrect = 'Email incorrect',
  UserIncorrect = 'User incorrect',
  PasswordIncorrect = 'Password incorrect',
}

const MIN_PORT = 0;
const MAX_PORT = 65535;
const ENV_FILE_PATH = 'environments/.notify.env';

export {
  EnvValidationMessage,
  MIN_PORT,
  MAX_PORT,
  ENV_FILE_PATH
}
