import React, { FC } from 'react'
import AppHeader from '../../components/AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css'

const Layout: FC = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default Layout