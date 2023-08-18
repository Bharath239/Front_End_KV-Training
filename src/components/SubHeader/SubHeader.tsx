import { FC, useEffect, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Role } from '../../utils/enum';

export type SubHeaderInputTypes = {
  subHeading: string;
  action?: 'add' | 'edit';
  employeeId?: string;
};

const SubHeader: FC<SubHeaderInputTypes> = (props) => {
  const [authorization, setAuthorization] = useState(false);

  const navigate = useNavigate();

  const iconClickHandler = () => {
    if (props.action === 'add') navigate('/employees/create');
    else if (props.action === 'edit') navigate('/employees/edit/' + props.employeeId);
  };

  useEffect(() => {
    if ([Role.HR, Role.ADMIN].includes(localStorage.loginRole)) setAuthorization(true);
    else setAuthorization(false);
  }, [localStorage.loginRole]);

  return (
    <div className='subHeaderBox' data-testid='subheader-test'>
      <div className='subHeader'>{props.subHeading}</div>
      {authorization && props.action && (
        <div className='actionBox' onClick={iconClickHandler} data-testid='actionbox-test '>
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
