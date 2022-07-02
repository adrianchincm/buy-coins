import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header>      
      <nav className='tw-flex'>
        <ul>
          <li>
            <NavLink to='/' className={navData => navData.isActive ? 'tw-underline' : '' }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/orders' className={navData => navData.isActive ? 'tw-underline' : '' }>
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
