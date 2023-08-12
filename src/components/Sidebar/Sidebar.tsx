import { FC } from 'react';
import './styles.css';

const Sidebar: FC = () => {
  return (
    <div className='leftSideBar'>
      <div className='selectedBar'>
        <div className='iconbg'>
          <img src='/assets/icons/employees.svg' alt='employeeicon' />
        </div>
        <div className='listname'>Employee List</div>
      </div>
    </div>
  );
};

export default Sidebar;
