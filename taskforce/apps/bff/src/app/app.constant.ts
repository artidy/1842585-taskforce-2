enum Microservices {
  Notify = 'notify',
  Tasks = 'tasks',
  Uploader = 'uploader',
  Users = 'users',
}

enum Port {
  Min = 0,
  Max = 65535
}

enum EnvValidationMessage {
  ServerInvalid = 'Host server is invalid',
  ServerPortInvalid = 'Server port is invalid',
  TimeOutInvalid = 'Request timeout is invalid',
  MaxRedirectsInvalid = 'Max redirects is invalid',
}

const ENV_FILE_PATH = 'environments/.bff.env';
const DEFAULT_PORT = 3333;

export {
  Microservices,
  Port,
  EnvValidationMessage,
  ENV_FILE_PATH,
  DEFAULT_PORT,
}
