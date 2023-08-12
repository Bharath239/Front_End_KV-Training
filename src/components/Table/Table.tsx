import { FC } from 'react';
import './styles.css';
import { Employee } from '../../utils/EmployeeList';
import { useNavigate } from 'react-router-dom';
import StatusField from '../StatusField/StatusField';

type InputTypes = {
  employees: Employee[];
};

const Table: FC<InputTypes> = (props) => {
  const navigate = useNavigate();
  const employeeClickHandler = (id) => {
    navigate('/employees/' + id);
  };

  return (
    <table className='table'>
      <thead>
        <tr className='headerRow'>
          <th>Employee Name</th>
          <th>Employee ID</th>
          <th>Joining Date</th>
          <th>Role</th>
          <th>Status</th>
          <th>Experience</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='tableBody'>
        {props.employees.map((employee) => {
          return (
            <tr
              className='elementRow'
              key={employee.id}
              onClick={() => employeeClickHandler(employee.id)}
            >
              <td>{employee.name}</td>
              <td>{employee.id}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.role}</td>
              <td>
                <StatusField status={employee.isActive}></StatusField>
              </td>
              <td>{employee.experience + ' years'}</td>
              <td>add icons</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
