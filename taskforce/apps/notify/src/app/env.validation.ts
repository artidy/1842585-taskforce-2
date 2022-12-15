import { IsNumber, IsString, Max, Min, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { EnvValidationMessage, MAX_PORT, MIN_PORT } from './app.constant';

class EnvironmentsConfig {
  @IsString({
    message: EnvValidationMessage.ServerInvalid
  })
  public SMTP_SERVER: string;

  @IsNumber({}, {
    message: EnvValidationMessage.ServerPortInvalid
  })
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  public SMTP_SERVER_PORT: number;

  @IsString({
    message: EnvValidationMessage.EmailIncorrect
  })
  public ADMIN_EMAIL: string;

  @IsString({
    message: EnvValidationMessage.UserIncorrect
  })
  public EMAIL_USER: string;

  @IsString({
    message: EnvValidationMessage.PasswordIncorrect
  })
  public EMAIL_PASSWORD: string;
}

export function validateEnvironments(config: Record<string, unknown>) {
  const environmentsConfig = plainToInstance(
    EnvironmentsConfig,
    config,
    { enableImplicitConversion: true  },
  );

  const errors = validateSync(
    environmentsConfig, {
      skipMissingProperties: false
    }
  );

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return environmentsConfig;
}
