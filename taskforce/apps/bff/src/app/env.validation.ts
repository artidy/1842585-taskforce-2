import { IsNumber, IsString, Max, Min, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { EnvValidationMessage, Port } from './app.constant';

class EnvironmentsConfig {
  @IsString({
    message: EnvValidationMessage.ServerInvalid
  })
  public NOTIFY_SERVER: string;

  @IsNumber({}, {
    message: EnvValidationMessage.ServerPortInvalid
  })
  @Min(Port.Min)
  @Max(Port.Max)
  public NOTIFY_SERVER_PORT: number;

  @IsString({
    message: EnvValidationMessage.ServerInvalid
  })
  public TASKS_SERVER: string;

  @IsNumber({}, {
    message: EnvValidationMessage.ServerPortInvalid
  })
  @Min(Port.Min)
  @Max(Port.Max)
  public TASKS_SERVER_PORT: number;

  @IsString({
    message: EnvValidationMessage.ServerInvalid
  })
  public UPLOADER_SERVER: string;

  @IsNumber({}, {
    message: EnvValidationMessage.ServerPortInvalid
  })
  @Min(Port.Min)
  @Max(Port.Max)
  public UPLOADER_SERVER_PORT: number;

  @IsString({
    message: EnvValidationMessage.ServerInvalid
  })
  public USERS_SERVER: string;

  @IsNumber({}, {
    message: EnvValidationMessage.ServerPortInvalid
  })
  @Min(Port.Min)
  @Max(Port.Max)
  public USERS_SERVER_PORT: number;

  @IsNumber({}, {
    message: EnvValidationMessage.TimeOutInvalid
  })
  public HTTP_TIMEOUT: number;

  @IsNumber({}, {
    message: EnvValidationMessage.MaxRedirectsInvalid
  })
  public HTTP_MAX_REDIRECTS: number;
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
