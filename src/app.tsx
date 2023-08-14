import { type FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeesPage from './pages/employees/EmployeesPage';
import EmployeeDetailsPage from './pages/employeeDetailsPage/EmployeeDetailsPage';
import CreateEmployeePage from './pages/createEmployeePage/CreateEmployeePage';
import EditEmployeePage from './pages/editEmployeePage/EditEmployeePage';

const App: FC = () => (
  <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/employees' element={<EmployeesPage />} />
        <Route path='/employees/:id' element={<EmployeeDetailsPage />} />
        <Route path='/employees/create' element={<CreateEmployeePage />} />
        <Route path='/employees/edit/:id' element={<EditEmployeePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
