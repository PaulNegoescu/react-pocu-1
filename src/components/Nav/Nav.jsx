import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav className={styles['main-menu']}>
      <menu>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/counter"
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/weather"
          >
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/todos"
          >
            Todos
          </NavLink>
        </li>

        <li className={styles.pushRight}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </menu>
    </nav>
  );
}
