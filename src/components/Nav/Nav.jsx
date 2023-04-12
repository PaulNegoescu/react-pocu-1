import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import { useAuth } from '../../features';
import clsx from 'clsx';

function BrandNavLink({ children, className, ...props }) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(className, { [styles.active]: isActive })
      }
      {...props}
    >
      {children}
    </NavLink>
  );

  // React.createElement(NavLink, {className: clsx(), ...props}, children);
}

export function Nav() {
  const { user, logout } = useAuth();

  function handleLogout(e) {
    e.preventDefault();

    logout();
  }

  return (
    <nav className={styles['main-menu']}>
      <menu>
        <li>
          <BrandNavLink to="/">Home</BrandNavLink>
        </li>
        <li>
          <BrandNavLink to="/counter">Counter</BrandNavLink>
        </li>
        <li>
          <BrandNavLink to="/weather">Weather</BrandNavLink>
        </li>
        <li>
          <BrandNavLink to="/todos">Todos</BrandNavLink>
        </li>
        <li>
          <BrandNavLink to="/films">Films</BrandNavLink>
        </li>

        {user && (
          <li className={styles.pushRight}>
            Welcome {user.firstName}!{' '}
            <a href="/" onClick={handleLogout}>
              Logout
            </a>
          </li>
        )}
        {!user && (
          <>
            <li className={styles.pushRight}>
              <BrandNavLink to="/login">Login</BrandNavLink>
            </li>
            <li>
              <BrandNavLink to="/register">Register</BrandNavLink>
            </li>
          </>
        )}
      </menu>
    </nav>
  );
}
