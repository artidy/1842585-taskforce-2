import {User, UserRole} from '@taskforce/shared-types';
import {compare, genSalt, hash} from 'bcrypt';

const SALT_ROUNDS = 10;

export class AuthUserEntity implements User {
  public _id: string;
  public avatar: string;
  public city: string;
  public dataBirth: Date;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;
  public role: UserRole;

  constructor(user: User) {
    this.fillEntity(user);
  }

  public toObject() {
    return {...this};
  }

  public async setPassword(password: string): Promise<AuthUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);

    this.passwordHash = await hash(password, salt);

    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public fillEntity(user: User) {
    this._id = user._id;
    this.avatar = user.avatar;
    this.city = user.city;
    this.dataBirth = user.dataBirth;
    this.email = user.email;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.passwordHash = user.passwordHash;
    this.role = user.role;
  }
}
