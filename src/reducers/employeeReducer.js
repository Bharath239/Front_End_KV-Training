const initialState = [
  {
    name: 'Vishal M',
    id: 1,
    joiningDate: '11/02/2012',
    role: 'Full Stack',
    experience: 8,
    isActive: true,
    department: '1',
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
    role: 'UI Engineer',
    experience: 8,
    isActive: false,
    department: '2',
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
    role: 'Devops',
    experience: 8,
    isActive: true,
    department: '3',
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
    role: 'Devops',
    experience: 8,
    isActive: false,
    department: '3',
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

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE': {
      const newState = [...state, action.payload.employee];

      return newState;
    }
    case 'EMPLOYEE:DELETE': {
      const newState = state.filter((e) => e.id !== action.payload);

      return newState;
    }
    case 'EMPLOYEE:EDIT': {
      const newState = state.map((emp) => {
        if (emp.id === action.payload.employee.id) return (emp = action.payload.employee);

        return emp;
      });

      return newState;
    }
    default:
      return state;
  }
};

export default employeeReducer;
