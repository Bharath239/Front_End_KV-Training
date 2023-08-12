import EmployeeDetailsInputFeild from '../../components/EmployeeDetailsInputField/EmployeeDetailsInputField';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SubHeader from '../../components/SubHeader/SubHeader';
import './styles.css';

const EditEmployeePage = () => {
  return (
    <div className='employeesPage'>
      <Header />
      <div className='notNavBar'>
        <Sidebar />
        <div className='notSideBar'>
          <SubHeader subHeading='Edit Employee ' />
          <EmployeeDetailsInputFeild idVisibility={true} />
        </div>
      </div>
    </div>
  );
};

export default EditEmployeePage;
