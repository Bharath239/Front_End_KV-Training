import { useState, type FC, useEffect } from 'react';
import './styles.css';
import Input from '../../components/InputField/Input';
import Button from '../../components/ButtonField/Button';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';

const LoginPage: FC = () => {
  const [userName, setUserName] = useState('');
  const onUserNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const [password, setPassword] = useState('');
  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const [emptyUsernameError, setEmptyUsernameError] = useState(false);
  const [emptyPasswordError, setEmptyPasswordError] = useState(false);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const [login, { data, isSuccess }] = useLoginMutation();

  useEffect(() => {
    if (data && isSuccess) {
      setShowError(false);
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('loginRole', data.data.employeeDetails.role);
      navigate('/employees');
    }
  }, [data, isSuccess]);
  const loginHandler = () => {
    if (userName && password) login({ username: userName, password: password });
    if (userName && password && !isSuccess)
      setTimeout(() => {
        setShowError(true);
      }, 200);
    else setShowError(false);

    if (!userName) setEmptyUsernameError(true);
    if (!password) setEmptyPasswordError(true);
    if (userName) setEmptyUsernameError(false);
    if (password) setEmptyPasswordError(false);
  };

  return (
    <>
      <div className='leftHalf'>
        <img className='bannerLogo' src='./assets/img/banner.png' alt='loginBanner' />
      </div>
      <div className='rightHalf'>
        <div className='loginbox'>
          <img className='kvlogo' src='./assets/img/kv-logo.png' alt='kvlogo' />
          <div>
            <Input
              type='Text'
              placeholder='Username'
              inputState={userName}
              onChangeHandler={onUserNameChangeHandler}
            ></Input>
            {emptyUsernameError && <p className='errorMessage'>Username is empty</p>}
            <Input
              type='Password'
              placeholder='Password'
              inputState={password}
              onChangeHandler={onPasswordChangeHandler}
            ></Input>
            {emptyPasswordError && <p className='errorMessage'>Password is empty</p>}
            {showError && <p className='errorMessage'>Incorrect Username or password</p>}
            <div className='loginButton'>
              <Button type='filled' value='Login' onClickHandler={loginHandler}></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
