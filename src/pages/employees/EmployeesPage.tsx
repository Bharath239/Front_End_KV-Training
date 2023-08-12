import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './styles.css';
import { FC } from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import Table from '../../components/Table/Table';
import { Employees } from '../../utils/EmployeeList';

const EmployeesPage: FC = () => {
  return (
    <div className='employeesPage'>
      <Header />
      <div className='notNavBar'>
        <Sidebar />
        <div className='notSideBar'>
          <SubHeader subHeading='Employee List' action='add' />
          <Table employees={Employees} />
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
