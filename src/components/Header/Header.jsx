import React from 'react';
import styles from './Header.module.css';
import logo from './resources/logo.svg';

const Header = () => (
  <header className={styles.root}>
    <img src={logo} className={styles.logo} alt="" />
  </header>
);

export default Header;
