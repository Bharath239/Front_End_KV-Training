import { Role } from './enum';

export type Employee = {
  name: string;
  username?: string;
  password?: string;
  id: number;
  joiningDate: string;
  role: string;
  isActive: boolean | string;
  experience: number | string;
  address: Address;
  departmentId: string | number;
};

export type Address = {
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
};

export type jwtPayload = {
  name: string;
  username: string;
  role: Role;
};
