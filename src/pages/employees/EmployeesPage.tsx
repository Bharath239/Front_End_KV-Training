import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './styles.css';
import { FC } from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';

const EmployeesPage: FC = () => {
  return (
    <div className='employeesPage'>
      <Header />
      <div className='notNavBar'>
        <Sidebar />
        <div className='notSideBar'>
          <SubHeader subHeading='Employee Details' action='Edit' icon='edit' />
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
