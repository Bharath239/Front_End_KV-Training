import { FC } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import StatusField from '../StatusField/StatusField';
import { useDispatch } from 'react-redux';
import { Employee } from '../../utils/types';
// import ConfirmDialogBox from '../ConfirmDialogBox/ConfirmDialogBox';

type InputTypes = {
  employees: Employee[];
};

const Table: FC<InputTypes> = (props) => {
  const navigate = useNavigate();
  const employeeClickHandler = (id) => {
    navigate('/employees/' + id);
  };

  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    dispatch({
      type: 'EMPLOYEE:DELETE',
      payload: id
    });
    e.stopPropagation();
  };
  const handleEdit = (e, id) => {
    navigate('/employees/edit/' + id);
    e.stopPropagation();
  };
  // const [openStatus, setOpenStatus] = useState(false);

  // const cancelClickHandler = () => {
  //   setOpenStatus(false);
  // };

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
              <td>
                <img
                  className='actionIcons'
                  src='/assets/icons/red-delete.svg'
                  alt='delete icon'
                  // onClick={() => setOpenStatus(true)}
                  onClick={(e) => handleDelete(e, employee.id)}
                />
                {/* <ConfirmDialogBox
                    title='Are you sure?'
                    content='Do you realy want to delete employee'
                    openStatus={openStatus}
                    cancelClickHandler={cancelClickHandler}
                    confirmClickHandler={handleDelete(e, employee.id)}
                  ></ConfirmDialogBox> */}
                <img
                  className='actionIcons'
                  src='/assets/icons/blue-edit-icon.svg'
                  alt='edit icon'
                  onClick={(e) => handleEdit(e, employee.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
