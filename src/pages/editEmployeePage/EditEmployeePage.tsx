import EmployeeDetailsInputFeild from '../../components/EmployeeDetailsInputField/EmployeeDetailsInputField';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SubHeader from '../../components/SubHeader/SubHeader';
import './styles.css';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Employee } from '../../utils/types';
import { useGetEmployeeByIdQuery } from '../employeeDetailsPage/api';

const EditEmployeePage = () => {
  const { id } = useParams();
  // const employeesData: Employee[] = useSelector((state: any) => {
  //   return state.employees;
  // });

  // const employee = employeesData.find((emp) => emp.id == Number(id));

  const { data } = useGetEmployeeByIdQuery(+id);
  const employee = data?.data;

  return (
    <div className='employeesPage'>
      <Header />
      <div className='notNavBar'>
        <Sidebar />
        <div className='notSideBar'>
          <SubHeader subHeading='Edit Employee ' />
          <EmployeeDetailsInputFeild idVisibility={true} employee={employee} />
        </div>
      </div>
    </div>
  );
};

export default EditEmployeePage;
