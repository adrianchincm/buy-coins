import { Fragment } from 'react';

import MainNavigation from './MainNavigation';
import Navigation from './Navigation';

const Layout = (props: any) => {
  return (
    <Fragment>
      {/* <MainNavigation /> */}
      <Navigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
