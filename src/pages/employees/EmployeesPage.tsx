import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './styles.css';
import { FC } from 'react';
import SubHeader from '../../components/SubHeader/SubHeader';
import Table from '../../components/Table/Table';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Employee } from '../../utils/types';

const EmployeesPage: FC = () => {
  const employeesData: Employee[] = useSelector((state: any) => {
    return state.employees;
  });

  return (
    <div className='employeesPage'>
      <Header />
      <div className='notNavBar'>
        <Sidebar />
        <div className='notSideBar'>
          <SubHeader subHeading='Employee List' action='add' />
          <Table employees={employeesData} />
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
