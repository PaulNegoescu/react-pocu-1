import { NavLink, Route, Routes } from 'react-router-dom';
import { AddFilm, FilmDetails, FilmsList } from './';

import styles from './Films.module.css';

export function FilmsLayout() {
  return (
    <>
      <nav className={styles.nav}>
        <h1>Films</h1>
        <NavLink to="">Films List</NavLink>
        <NavLink to="add">Add a Film</NavLink>
      </nav>
      <Routes>
        <Route index element={<FilmsList />} />
        <Route path=":filmId" element={<FilmDetails />} />
        <Route path="add" element={<AddFilm />} />
      </Routes>
    </>
  );
}
