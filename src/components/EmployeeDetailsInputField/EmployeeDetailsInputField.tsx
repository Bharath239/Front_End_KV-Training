/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { FC, useEffect, useState } from 'react';
import DetailsInputBox from '../DetailsInputBox/DetailsInputBox';
import './styles.css';
import DropDownField from '../DropDownField/DropDownField';
import Button from '../ButtonField/Button';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { Employee } from '../../utils/types';
// import { addEmployee, editEmployee } from '../../actions/employeeActions';
import { useCreateEmployeeMutation } from '../../pages/createEmployeePage/api';
import { useEditEmployeeMutation } from '../../pages/editEmployeePage/api';
import { Role } from '../../utils/enum';

type InputType = {
  idVisibility: boolean;
  employee?: Employee;
};

const EmployeeDetailsInputFeild: FC<InputType> = (props) => {
  const [employeeName, setEmployeeName] = useState('');
  const onEmployeeNameChange = (e) => setEmployeeName(e.target.value);
  const [userName, setUserName] = useState('');
  const onUserNameChange = (e) => setUserName(e.target.value);
  const [password, setPassword] = useState('');
  const onPasswordChange = (e) => setPassword(e.target.value);
  const [joiningDate, setJoiningDate] = useState('');
  const onJoiningDateChange = (e) => setJoiningDate(e.target.value);
  const [experience, setExperience] = useState<number | string>('');
  const onExperienceChange = (e) => setExperience(e.target.value);
  const [department, setDepartment] = useState<number | string>('');
  const onDepartmentSelect = (e) => setDepartment(e.target.value);
  const [role, setRole] = useState('');
  const onRoleSelect = (e) => setRole(e.target.value);
  const [status, setStatus] = useState('');
  const onStatusSelect = (e) => setStatus(e.target.value);
  const [address_line_1, setAddressLine1] = useState('');
  const onAddressLine1Change = (e) => setAddressLine1(e.target.value);
  const [address_line_2, setAddressLine2] = useState('');
  const onAddressLine2Change = (e) => setAddressLine2(e.target.value);
  const [city, setCity] = useState('');
  const onCityChange = (e) => setCity(e.target.value);
  const [state, setState] = useState('');
  const onStateChange = (e) => setState(e.target.value);
  const [country, setCountry] = useState('');
  const onCountryChange = (e) => setCountry(e.target.value);
  const [pincode, setPincode] = useState('');
  const onPincodeChange = (e) => setPincode(e.target.value);

  useEffect(() => {
    if (props.employee) {
      setEmployeeName(props.employee.name);
      setUserName(props.employee.username);
      setPassword(props.employee.password);
      setJoiningDate(props.employee.username);
      setExperience(props.employee.experience);
      setDepartment(props.employee.departmentId);
      setRole(props.employee.role);
      setStatus(props.employee.isActive ? 'Active' : 'Inactive');
      setAddressLine1(props.employee.address.address_line_1);
      setAddressLine2(props.employee.address.address_line_2);
      setCity(props.employee.address.city);
      setState(props.employee.address.state);
      setCountry(props.employee.address.country);
      setPincode(props.employee.address.pincode);
    }
  }, [props.employee]);

  const departmentOptions = [1, 2, 3].map((item) => <option key={item}>{item}</option>);

  const roleOptions = [Role.ADMIN, Role.DEVELOPER, Role.HR, Role.UI].map((item) => (
    <option key={item}>{item}</option>
  ));

  const statusOptions = ['Active', 'Inactive'].map((item) => <option key={item}>{item}</option>);

  const navigate = useNavigate();

  const onCancel = () => {
    if (!props.employee) navigate('/employees/');
    else navigate(-1);
  };

  // const dispatch = useDispatch();

  const [createEmployee, { data: createData, isSuccess: createStatus }] =
    useCreateEmployeeMutation();
  const [editEmployee, { data: editData, isSuccess: editStatus }] = useEditEmployeeMutation();

  useEffect(() => {
    if (createData && createStatus) navigate('/employees');
    if (editData && editStatus) navigate(-1);
  }, [createData, createStatus, editData, editStatus]);

  const handleCreate = () => {
    if (
      employeeName &&
      employeeName &&
      joiningDate &&
      role &&
      status &&
      experience &&
      address_line_1 &&
      address_line_2 &&
      city &&
      state &&
      country &&
      pincode &&
      department
    )
      createEmployee({
        name: employeeName,
        username: userName,
        password: password,
        id: Math.floor(Math.random() * 10000),
        joiningDate: joiningDate,
        role: role,
        isActive: status === 'Active' ? true : false,
        experience: Number(experience),
        address: {
          address_line_1: address_line_1,
          address_line_2: address_line_2,
          city: city,
          state: state,
          country: country,
          pincode: pincode
        },
        departmentId: Number(department)
      });

    // dispatch(
    //   addEmployee({
    // employee: {
    //   name: employeeName,
    //   id: Math.floor(Math.random() * 10000),
    //   joiningDate: joiningDate,
    //   role: role,
    //   isActive: status,
    //   experience: experience,
    //   address: {
    //     address_line_1: address_line_1,
    //     address_line_2: address_line_2,
    //     city: city,
    //     state: state,
    //     country: country,
    //     pincode: pincode
    //   },
    //   department: department
    // }
    //   })
    // );
  };

  const handleSave = () => {
    // eslint-disable-next-line no-debugger
    editEmployee({
      id: props.employee.id,
      body: {
        name: employeeName,
        joiningDate: joiningDate,
        role: role,
        isActive: status === 'Active' ? true : false,
        experience: Number(experience),
        address: {
          address_line_1: address_line_1,
          address_line_2: address_line_2,
          city: city,
          state: state,
          country: country,
          pincode: pincode
        },
        departmentId: Number(department)
      }
    });
  };

  return (
    <div className='detailsbox'>
      <DetailsInputBox
        label='Employee Name'
        placeholder='Employee Name'
        inputState={employeeName}
        onChangeHandler={onEmployeeNameChange}
      />
      {!props.employee && (
        <>
          <DetailsInputBox
            label='Username'
            placeholder='Username'
            inputState={userName}
            onChangeHandler={onUserNameChange}
          />
          <DetailsInputBox
            label='Password'
            placeholder='Password'
            inputState={password}
            onChangeHandler={onPasswordChange}
          />
        </>
      )}

      <DetailsInputBox
        label='Joining Date'
        placeholder='Joining Date'
        inputState={joiningDate}
        onChangeHandler={onJoiningDateChange}
      />
      <DetailsInputBox
        label='Experience'
        placeholder='Experience'
        inputState={String(experience)}
        onChangeHandler={onExperienceChange}
      />
      <DropDownField
        label='Department'
        placeholder='Choose Department'
        options={departmentOptions}
        onChoice={onDepartmentSelect}
        selectedState={department}
      />
      <DropDownField
        label='Role'
        placeholder='Choose Role'
        options={roleOptions}
        onChoice={onRoleSelect}
        selectedState={role}
      />
      <DropDownField
        label='Status'
        placeholder='Status'
        options={statusOptions}
        onChoice={onStatusSelect}
        selectedState={status}
      />
      <div className='addressBox'>
        <label>Address</label>
        <div className='addressInput'>
          <DetailsInputBox
            inputState={address_line_1}
            onChangeHandler={onAddressLine1Change}
            placeholder='Address Line 1'
          />
          <DetailsInputBox
            inputState={address_line_2}
            onChangeHandler={onAddressLine2Change}
            placeholder='Address Line 2'
          />
          <DetailsInputBox inputState={city} onChangeHandler={onCityChange} placeholder='City' />
          <DetailsInputBox inputState={state} onChangeHandler={onStateChange} placeholder='State' />
          <DetailsInputBox
            inputState={country}
            onChangeHandler={onCountryChange}
            placeholder='Country'
          />
          <DetailsInputBox
            inputState={pincode}
            onChangeHandler={onPincodeChange}
            placeholder='Pincode'
          />
        </div>
      </div>
      <DetailsInputBox
        label='Employee ID'
        inputState={String(props.employee?.id)}
        visibility={props.idVisibility}
      />
      <div className='buttonArea'>
        {props.idVisibility && <Button value={'Save'} type='filled' onClickHandler={handleSave} />}
        {!props.idVisibility && (
          <Button value={'Create'} type='filled' onClickHandler={handleCreate} />
        )}
        <Button value={'Cancel'} type='empty' onClickHandler={onCancel} />
      </div>
    </div>
  );
};

export default EmployeeDetailsInputFeild;
