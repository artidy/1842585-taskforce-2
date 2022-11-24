import {UserRole} from '@taskforce/shared-types';

interface User {
  _id?: string;
  email: string;
  firstname: string;
  lastname: string;
  city: string;
  dataBirth: Date;
  avatar: string;
  role: UserRole;
  passwordHash: string;
}

class InitialUser implements User {
  avatar: '';
  city: '';
  dataBirth: null;
  email: '';
  firstname: '';
  lastname: '';
  passwordHash: '';
  role: null;
}

export {
  User,
  InitialUser
}
