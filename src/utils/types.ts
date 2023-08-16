export type Employee = {
  name: string;
  id: number;
  joiningDate: string;
  role: string;
  isActive: boolean;
  experience: number;
  address: Address;
  department: string;
};

export type Address = {
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
};
