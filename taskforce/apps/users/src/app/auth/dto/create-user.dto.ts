import {UserRole} from '@taskforce/shared-types';

export class CreateUserDto {
  public email: string;
  public firstname: string;
  public lastname: string;
  public city: string;
  public password: string;
  public role: UserRole;
  public avatar?: string;
  public dataBirth?: string;
}
