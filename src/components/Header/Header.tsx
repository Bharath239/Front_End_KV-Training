import { FC } from 'react';
import './styles.css';

const Header: FC = () => {
  return (
    <div className='navBar' data-testid='header-test'>
      <div className='logoBox'>
        <img className='kvlogonavbar' src='/assets/img/kv-logo.png' alt='kvlogo' />
      </div>
    </div>
  );
};

export default Header;
