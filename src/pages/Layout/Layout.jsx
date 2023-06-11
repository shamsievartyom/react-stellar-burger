import React from 'react'
import AppHeader from '../../components/AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className={styles.app}>
          <AppHeader />
          <Outlet />
        </div>
      );
}

export default Layout