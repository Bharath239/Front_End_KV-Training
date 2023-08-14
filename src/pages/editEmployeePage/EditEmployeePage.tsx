import { Employees } from '../../utils/EmployeeList';
import EmployeeDetailsInputFeild from '../../components/EmployeeDetailsInputField/EmployeeDetailsInputField';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SubHeader from '../../components/SubHeader/SubHeader';
import './styles.css';
import { useParams } from 'react-router-dom';

const EditEmployeePage = () => {
  const { id } = useParams();
  const employee = Employees.find((emp) => emp.id == Number(id));

  return (
    <div className='employeesPage'>
      <Header />
      <div className='notNavBar'>
        <Sidebar />
        <div className='notSideBar'>
          <SubHeader subHeading='Edit Employee ' employee={employee} />
          <EmployeeDetailsInputFeild idVisibility={true} employee={employee} />
        </div>
      </div>
    </div>
  );
};

export default EditEmployeePage;
