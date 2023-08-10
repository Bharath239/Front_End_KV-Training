import { type FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/login/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeesPage from './pages/employees/EmployeesPage';

const App: FC = () => (
  <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/employees' element={<EmployeesPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
