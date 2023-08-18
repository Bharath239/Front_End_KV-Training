import { FC } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/employees');

  return (
    <div className='leftSideBar' data-testid='sidebar-test'>
      <div className='selectedBar' onClick={handleClick} data-testid='selectedbar-test'>
        <div className='iconbg'>
          <img src='/assets/icons/employees.svg' alt='employeeicon' />
        </div>
        <div className='listname'>Employee List</div>
      </div>
    </div>
  );
};

export default Sidebar;
