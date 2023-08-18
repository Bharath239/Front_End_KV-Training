import { FC, useEffect, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import StatusField from '../StatusField/StatusField';
// import { useDispatch } from 'react-redux';
import { Employee } from '../../utils/types';
// import { deleteEmployee } from '../../actions/employeeActions';
import { useDeleteEmployeeMutation } from '../../pages/employees/api';
import { Role } from '../../utils/enum';
// import ConfirmDialogBox from '../ConfirmDialogBox/ConfirmDialogBox';

type InputTypes = {
  employees: { data: Employee[] };
};

const Table: FC<InputTypes> = (props) => {
  const [authorization, setAuthorization] = useState(true);

  const navigate = useNavigate();
  const employeeClickHandler = (id) => {
    navigate('/employees/' + id);
  };

  // const dispatch = useDispatch();

  const [deleteEmployee] = useDeleteEmployeeMutation();

  const handleDelete = (e, id) => {
    deleteEmployee(id);
    // dispatch(deleteEmployee(id));
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

  useEffect(() => {
    if ([Role.ADMIN, Role.HR].includes(localStorage.loginRole)) setAuthorization(true);
    else setAuthorization(false);
  }, [localStorage]);

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
          {authorization && <th>Action</th>}
        </tr>
      </thead>
      <tbody className='tableBody'>
        {props?.employees?.data?.map((employee) => {
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
              {authorization && (
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
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
