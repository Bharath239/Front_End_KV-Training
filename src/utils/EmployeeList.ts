export type Employee = {
  name: string;
  id: number;
  joiningDate: string;
  role: string;
  isActive: boolean;
  experience: number;
  address: Address;
};

export type Address = {
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
};

export const Employees = [
  {
    name: 'Vishal M',
    id: 1,
    joiningDate: '11/02/2012',
    role: 'full stack',
    experience: 8,
    isActive: true,
    address: {
      address_line_1: 'Edachira',
      address_line_2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  },
  {
    name: 'Bharath',
    id: 2,
    joiningDate: '11/02/2012',
    role: 'front end',
    experience: 8,
    isActive: false,
    address: {
      address_line_1: 'Edachira',
      address_line_2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  },
  {
    name: 'susan',
    id: 3,
    joiningDate: '11/02/2012',
    role: 'backend',
    experience: 8,
    isActive: true,
    address: {
      address_line_1: 'Edachira',
      address_line_2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  },
  {
    name: 'kurian',
    id: 4,
    joiningDate: '11/02/2012',
    role: 'devops',
    experience: 8,
    isActive: false,
    address: {
      address_line_1: 'Edachira',
      address_line_2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  }
];
