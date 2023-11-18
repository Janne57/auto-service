import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '16px' }}>
      <header className={css.headernav}>
        <Navigation  />
      </header>

      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
