import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import './styles.css';
import DetailsField from '../../components/DetailsField/DetailsField';
// import { Employee } from '../../utils/types';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useGetEmployeeByIdQuery } from './api';

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  // const employeesData: Employee[] = useSelector((state: any) => {
  //   return state.employees;
  // });
  // const employee = employeesData.find((emp) => emp.id == Number(id));

  const { data } = useGetEmployeeByIdQuery(+id);
  const employee = data?.data || null;

  return (
    <div className='employeesPage'>
      <Header />
      <div className='notNavBar'>
        <Sidebar />
        <div className='notSideBar'>
          <SubHeader subHeading='Employee Details' action='edit' employeeId={id} />
          {data && (
            <div className='detailBox'>
              <DetailsField detail={employee.name} label={'Employee Name'} />
              <DetailsField detail={employee.joiningDate} label={'Joining Date'} />
              <DetailsField detail={employee.experience + ' years'} label={'Experience'} />
              <DetailsField detail={employee.role} label={'Role'} />
              <DetailsField detail={employee.isActive} label={'Status'} />
              <DetailsField address={employee.address} label={'Address'} />
              <DetailsField detail={employee.id} label={'Employee ID'} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsPage;
