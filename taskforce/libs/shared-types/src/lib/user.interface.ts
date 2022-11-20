import {UserRole} from '@taskforce/shared-types';

export interface User {
  _id: string;
  email: string;
  firstname: string;
  lastname: string;
  city: string;
  dataBirth: Date;
  avatar: string;
  role: UserRole;
  passwordHash: string;
}
