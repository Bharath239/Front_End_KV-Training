import { FC } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Employee } from '../../utils/EmployeeList';

type InputTypes = {
  subHeading: string;
  action?: 'add' | 'edit';
  employee?: Employee;
};

const SubHeader: FC<InputTypes> = (props) => {
  const navigate = useNavigate();

  const iconClickHandler = (id?) => {
    if (props.action === 'add') navigate('/employees/create');
    else if (props.action === 'edit') navigate('/employees/edit/' + id);
  };

  return (
    <div className='subHeaderBox'>
      <div className='subHeader'>{props.subHeading}</div>
      {props.action && (
        <div
          className='actionBox'
          onClick={props.employee ? () => iconClickHandler(props.employee.id) : iconClickHandler}
        >
          <div className='actionIcon'>
            {props.action === 'add' && (
              <img className='plusIcon' src='/assets/img/+.png' alt='addicon' />
            )}
            {props.action === 'edit' && (
              <img className='editIcon' src='/assets/icons/edit.svg' alt='editicon' />
            )}
          </div>
          {props.action === 'edit' && <div className='action'>Edit</div>}
          {props.action === 'add' && <div className='action'>Create employee</div>}
        </div>
      )}
    </div>
  );
};

export default SubHeader;
