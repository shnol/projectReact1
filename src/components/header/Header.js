import React from 'react';
import cls from './Header.module.css';

const Header = () => {
  return (
      <header className={cls.header}>
          <div><img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" /></div>
      </header>
  );
}

export default Header;

